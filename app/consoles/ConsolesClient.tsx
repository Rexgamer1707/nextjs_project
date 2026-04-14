"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Trash, Plus, PencilLine, Eye, X, Image as ImageIcon } from "@phosphor-icons/react";
import { createConsoleAction, deleteConsoleAction, updateConsoleAction } from "@/app/actions";
import { consoleSchema } from "@/component/lib/schemas"; // Importa tu esquema
import Swal from "sweetalert2";

const emptyForm = { name: "", manufacturer: "", description: "", releaseDate: "" };

function ConsoleForm({
    formData, setFormData, onSubmit, onCancel, title, isEditing
}: {
    formData: typeof emptyForm;
    setFormData: (data: any) => void;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    title: string;
    isEditing: boolean;
}) {
    return (
        <div className="bg-black/60 border border-indigo-500/30 backdrop-blur-xl rounded-3xl p-8 mb-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-2xl tracking-tight">{title}</h2>
                <button type="button" onClick={onCancel} className="btn btn-sm btn-circle btn-ghost text-gray-400">
                    <X size={20} />
                </button>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-300 font-medium">Nombre de la Consola</span></label>
                        <input type="text" placeholder="Ej: PlayStation 5" className="input input-bordered bg-white/5 border-white/10 focus:border-indigo-500"
                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-300 font-medium">Fabricante</span></label>
                        <input type="text" placeholder="Ej: Sony, Nintendo..." className="input input-bordered bg-white/5 border-white/10"
                            value={formData.manufacturer} onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })} required />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-300 font-medium">Fecha de Lanzamiento</span></label>
                        <input type="date" className="input input-bordered bg-white/5 border-white/10"
                            value={formData.releaseDate} onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })} required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-300 font-medium">Imagen (Opcional)</span></label>
                        <div className="flex items-center gap-2">
                            <input type="file" name="image" accept="image/*" className="file-input file-input-bordered file-input-primary w-full bg-white/5" />
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text text-gray-300 font-medium">Descripción Histórica</span></label>
                    <textarea className="textarea textarea-bordered bg-white/5 border-white/10 min-h-32" placeholder="Cuéntanos sobre esta plataforma..."
                        value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                </div>

                <div className="flex gap-4 pt-4">
                    <button type="submit" className="btn btn-primary flex-1 shadow-lg shadow-indigo-500/20">
                        {isEditing ? 'Actualizar Plataforma' : 'Registrar Consola'}
                    </button>
                    <button type="button" onClick={onCancel} className="btn btn-ghost border-white/5">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default function ConsolesClient({ consoles }: { consoles: any[] }) {
    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const [editingConsole, setEditingConsole] = useState<any | null>(null);
    const [viewingConsole, setViewingConsole] = useState<any | null>(null);
    const [formData, setFormData] = useState(emptyForm);

    // ✅ Validación con Zod
    const validate = () => {
        const result = consoleSchema.safeParse(formData);
        if (!result.success) {
            const errorMsg = result.error.errors.map(e => e.message).join("\n");
            Swal.fire({ title: 'Datos inválidos', text: errorMsg, icon: 'warning', background: '#111827', color: '#ffffff' });
            return false;
        }
        return true;
    };

    const handleAction = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const formElement = e.currentTarget as HTMLFormElement;
        const data = new FormData(formElement);

        // Agregar campos del estado que no son archivos
        Object.entries(formData).forEach(([k, v]) => {
            if (!data.has(k)) data.append(k, v);
        });

        const res = editingConsole
            ? await updateConsoleAction(editingConsole.id, data)
            : await createConsoleAction(data);

        if (res.success) {
            await Swal.fire({
                title: editingConsole ? '¡Actualizada!' : '¡Creada!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                background: '#111827',
                color: '#ffffff'
            });
            cancelForm();
            router.refresh();
        } else {
            Swal.fire({ title: 'Error', text: res.error, icon: 'error', background: '#111827', color: '#ffffff' });
        }
    };

    const handleDelete = async (id: number, name: string) => {
        const result = await Swal.fire({
            title: '¿Eliminar consola?',
            text: `Se borrará "${name}" permanentemente.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, borrar',
            background: '#111827',
            color: '#ffffff'
        });

        if (result.isConfirmed) {
            const res = await deleteConsoleAction(id);
            if (res.success) {
                Swal.fire({ title: 'Borrada', icon: 'success', background: '#111827', color: '#ffffff' });
                router.refresh();
            }
        }
    };

    const openEdit = (c: any) => {
        setEditingConsole(c);
        setFormData({
            name: c.name,
            manufacturer: c.manufacturer,
            description: c.description,
            releaseDate: new Date(c.releaseDate).toISOString().split("T")[0],
        });
        setShowForm(false);
        setViewingConsole(null);
    };

    const cancelForm = () => {
        setShowForm(false);
        setEditingConsole(null);
        setFormData(emptyForm);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Consolas</h1>
                    <p className="text-indigo-400 font-medium mt-1">Gestión de ecosistemas de juegos</p>
                </div>
                <button onClick={() => { setShowForm(true); setEditingConsole(null); setFormData(emptyForm); }}
                    className="btn btn-primary btn-wide shadow-lg shadow-indigo-600/30 gap-2 text-white">
                    <Plus size={20} weight="bold" /> Nueva Consola
                </button>
            </div>

            {/* FORMULARIOS ANIMADOS */}
            {(showForm || editingConsole) && (
                <ConsoleForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleAction}
                    onCancel={cancelForm}
                    isEditing={!!editingConsole}
                    title={editingConsole ? `Editar ${editingConsole.name}` : "Nueva Plataforma"}
                />
            )}

            {/* GRID DE CONSOLAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {consoles.map((c) => (
                    <div key={c.id} className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/[0.08] hover:border-indigo-500/50 transition-all duration-500 shadow-xl">
                        {/* IMAGEN DE CONSOLA */}
                        <div className="h-48 bg-gradient-to-br from-indigo-900/40 to-black relative">
                            <img
                                src={c.image?.startsWith('http') ? c.image : "/imgs/no-console.jpeg"}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                alt={c.name}
                            />
                            <div className="absolute top-4 right-4">
                                <span className="badge badge-lg bg-black/60 backdrop-blur-md border-white/10 text-white font-bold px-4 py-4">
                                    {c._count.games} Juegos
                                </span>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{c.name}</h3>
                                <span className="text-indigo-400/80 text-sm font-semibold tracking-widest uppercase">{c.manufacturer}</span>
                            </div>

                            <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                                {c.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-gray-500 text-sm font-medium italic">Est. {new Date(c.releaseDate).getFullYear()}</span>
                                <div className="flex gap-2">
                                    <button onClick={() => setViewingConsole(c)} className="btn btn-sm btn-circle btn-ghost text-indigo-400 hover:bg-indigo-400/20"><Eye size={20} /></button>
                                    <button onClick={() => openEdit(c)} className="btn btn-sm btn-circle btn-ghost text-warning hover:bg-warning/20"><PencilLine size={20} /></button>
                                    <button onClick={() => handleDelete(c.id, c.name)} className="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/20"><Trash size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}