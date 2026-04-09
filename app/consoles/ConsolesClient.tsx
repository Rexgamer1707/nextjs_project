"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash, Plus, PencilLine, Eye, X } from "@phosphor-icons/react";
import { createConsoleAction, deleteConsoleAction, updateConsoleAction } from "@/app/actions";
import Swal from "sweetalert2";

const emptyForm = { name: "", manufacturer: "", description: "", releaseDate: "" };

// 👇 FUERA del componente principal — fix del bug de keystroke
function ConsoleForm({ formData, setFormData, onSubmit, onCancel, title }: {
    formData: typeof emptyForm;
    setFormData: (data: typeof emptyForm) => void;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    title: string;
}) {
    return (
        <div className="bg-black/40 border border-indigo-500/20 rounded-3xl p-8 mb-10 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold text-xl">{title}</h2>
                <button type="button" onClick={onCancel} className="btn btn-sm btn-ghost text-gray-400 hover:text-white">
                    <X size={18} />
                </button>
            </div>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Nombre</span></label>
                        <input type="text" className="input input-bordered w-full" value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Fabricante</span></label>
                        <input type="text" className="input input-bordered w-full" value={formData.manufacturer}
                            onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })} required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-gray-400">Fecha de lanzamiento</span></label>
                    <input type="date" className="input input-bordered w-full" value={formData.releaseDate}
                        onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })} required />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text text-gray-400">Descripción</span></label>
                    <textarea className="textarea textarea-bordered w-full min-h-24" value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                </div>
                <div className="flex gap-4 pt-2">
                    <button type="submit" className="btn btn-primary flex-1">Guardar</button>
                    <button type="button" onClick={onCancel} className="btn btn-ghost">Cancelar</button>
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

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([k, v]) => data.append(k, v));
        const res = await createConsoleAction(data);
        if (res.success) {
            await Swal.fire({ title: '¡Consola creada!', icon: 'success', timer: 2000, showConfirmButton: false, background: '#111827', color: '#ffffff' });
            setShowForm(false);
            setFormData(emptyForm);
            router.refresh();
        } else {
            Swal.fire({ title: 'Error', text: res.error, icon: 'error', background: '#111827', color: '#ffffff' });
        }
    };

    const handleEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingConsole) return;
        const res = await updateConsoleAction(editingConsole.id, formData);
        if (res.success) {
            await Swal.fire({ title: '¡Consola actualizada!', icon: 'success', timer: 2000, showConfirmButton: false, background: '#111827', color: '#ffffff' });
            setEditingConsole(null);
            setFormData(emptyForm);
            router.refresh();
        } else {
            Swal.fire({ title: 'Error', text: res.error, icon: 'error', background: '#111827', color: '#ffffff' });
        }
    };

    const handleDelete = async (id: number, name: string) => {
        const result = await Swal.fire({
            title: '¿Eliminar consola?',
            text: `Vas a eliminar "${name}".`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4f46e5',
            cancelButtonColor: '#1f2937',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            background: '#111827',
            color: '#ffffff'
        });
        if (result.isConfirmed) {
            const res = await deleteConsoleAction(id);
            if (res.success) {
                Swal.fire({ title: '¡Eliminada!', icon: 'success', timer: 2000, showConfirmButton: false, background: '#111827', color: '#ffffff' });
                router.refresh();
            } else {
                Swal.fire({ title: 'Error', text: res.error, icon: 'error', background: '#111827', color: '#ffffff' });
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
        <div className="p-4 md:p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white">Consoles</h1>
                    <p className="text-gray-400 text-sm mt-1">{consoles.length} plataformas registradas</p>
                </div>
                <button
                    onClick={() => { setShowForm(!showForm); setEditingConsole(null); setFormData(emptyForm); }}
                    className="btn btn-primary gap-2"
                >
                    <Plus size={18} /> Add Console
                </button>
            </div>

            {/* FORM CREAR */}
            {showForm && (
                <ConsoleForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleCreate}
                    onCancel={cancelForm}
                    title="Nueva Consola"
                />
            )}

            {/* FORM EDITAR */}
            {editingConsole && (
                <ConsoleForm
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleEdit}
                    onCancel={cancelForm}
                    title={`Editando: ${editingConsole.name}`}
                />
            )}

            {/* VIEW */}
            {viewingConsole && (
                <div className="bg-black/40 border border-indigo-500/30 rounded-3xl p-8 mb-10 shadow-2xl">
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <h2 className="text-white font-bold text-2xl">{viewingConsole.name}</h2>
                            <p className="text-indigo-400 text-sm">{viewingConsole.manufacturer}</p>
                        </div>
                        <button onClick={() => setViewingConsole(null)} className="btn btn-sm btn-ghost text-gray-400 hover:text-white">
                            <X size={18} />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                        <div>
                            <p className="text-gray-500 text-sm">Fabricante</p>
                            <p className="text-white font-medium">{viewingConsole.manufacturer}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Lanzamiento</p>
                            <p className="text-white font-medium">{new Date(viewingConsole.releaseDate).toDateString()}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Juegos</p>
                            <p className="text-white font-medium">{viewingConsole._count.games} games</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Precio mín / máx</p>
                            <p className="text-white font-medium">—</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-500 text-sm mb-2">Descripción</p>
                        <p className="text-gray-300 leading-relaxed">{viewingConsole.description}</p>
                    </div>
                    <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                        <button onClick={() => { openEdit(viewingConsole); setViewingConsole(null); }}
                            className="btn btn-sm btn-ghost text-warning hover:bg-warning/10 gap-1">
                            <PencilLine size={16} /> Editar
                        </button>
                        <button onClick={() => { handleDelete(viewingConsole.id, viewingConsole.name); setViewingConsole(null); }}
                            className="btn btn-sm btn-ghost text-error hover:bg-error/10 gap-1">
                            <Trash size={16} /> Eliminar
                        </button>
                    </div>
                </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {consoles.map((c) => (
                    <div key={c.id} className="bg-black/40 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-white font-bold text-lg truncate">{c.name}</h2>
                                <p className="text-gray-400 text-sm">{c.manufacturer}</p>
                            </div>
                            <span className="badge badge-primary ml-2 shrink-0">{c._count.games} games</span>
                        </div>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{c.description}</p>
                        <div className="pt-4 border-t border-white/5">
                            <span className="text-gray-500 text-xs">{new Date(c.releaseDate).getFullYear()}</span>
                            <div className="flex gap-1 mt-3">
                                <button onClick={() => { setViewingConsole(c); setEditingConsole(null); setShowForm(false); }}
                                    className="btn btn-sm btn-ghost text-info hover:bg-info/10 gap-1 flex-1">
                                    <Eye size={16} /> View
                                </button>
                                <button onClick={() => openEdit(c)}
                                    className="btn btn-sm btn-ghost text-warning hover:bg-warning/10 gap-1 flex-1">
                                    <PencilLine size={16} /> Edit
                                </button>
                                <button onClick={() => handleDelete(c.id, c.name)}
                                    className="btn btn-sm btn-ghost text-error hover:bg-error/10">
                                    <Trash size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}