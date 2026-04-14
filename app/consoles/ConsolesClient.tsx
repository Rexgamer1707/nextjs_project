"use client";
import { useState, useRef } from "react";
import { consoleSchema } from "@/component/lib/schemas";
import { createConsoleAction, updateConsoleAction, deleteConsoleAction } from "@/app/actions";
import {
    Plus,
    GameController,
    Buildings,
    FileText,
    Image as ImageIcon,
    Pencil,
    Trash,
    Eye,
    X,
    CalendarBlank
} from "@phosphor-icons/react";
import Swal from "sweetalert2";

export default function ConsolesClient({ initialConsoles }: { initialConsoles: any[] }) {
    const [formData, setFormData] = useState({ name: "", manufacturer: "", description: "" });
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const [editingConsole, setEditingConsole] = useState<any>(null);
    const [viewingConsole, setViewingConsole] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAction = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = consoleSchema.safeParse(formData);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }

        const data = new FormData();
        data.append("name", formData.name);
        data.append("manufacturer", formData.manufacturer);
        data.append("description", formData.description);
        if (file) data.append("image", file);

        const res = editingConsole
            ? await updateConsoleAction(editingConsole.id, data)
            : await createConsoleAction(data);

        if (res.success) {
            await Swal.fire({ title: "¡Éxito!", icon: "success", background: "#111827", color: "#fff" });
            resetAll();
            (document.getElementById("modal_consola") as HTMLDialogElement).close();
        }
    };

    const resetAll = () => {
        setFormData({ name: "", manufacturer: "", description: "" });
        setEditingConsole(null);
        setViewingConsole(null);
        setFile(null);
        setPreview(null);
        setErrors({});
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Consolas</h1>
                    <p className="text-indigo-400 mt-1">Gestión de ecosistemas de juegos</p>
                </div>
                <button
                    onClick={() => { resetAll(); (document.getElementById("modal_consola") as HTMLDialogElement).showModal(); }}
                    className="btn btn-primary shadow-lg shadow-indigo-500/20 gap-2 px-6"
                >
                    <Plus weight="bold" /> Nueva Consola
                </button>
            </div>

            {/* GRILLA DE TARJETAS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {initialConsoles.map((item) => (
                    <div key={item.id} className="group card bg-gray-900/40 border border-white/5 hover:border-indigo-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
                        <figure className="relative h-48 w-full overflow-hidden">
                            <img src={item.image || "/imgs/no-console.jpeg"} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-3 right-3">
                                <span className="badge badge-primary font-bold shadow-lg">{item.manufacturer}</span>
                            </div>
                        </figure>

                        <div className="card-body p-5">
                            <h2 className="card-title text-white text-xl mb-1">{item.name}</h2>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 h-10">{item.description}</p>

                            <div className="card-actions justify-end border-t border-white/5 pt-4 gap-2">
                                <button
                                    onClick={() => { setViewingConsole(item); (document.getElementById("modal_view") as HTMLDialogElement).showModal(); }}
                                    className="btn btn-square btn-ghost btn-sm text-blue-400 hover:bg-blue-400/10"
                                >
                                    <Eye size={20} />
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingConsole(item);
                                        setFormData({ name: item.name, manufacturer: item.manufacturer, description: item.description });
                                        (document.getElementById("modal_consola") as HTMLDialogElement).showModal();
                                    }}
                                    className="btn btn-square btn-ghost btn-sm text-yellow-400 hover:bg-yellow-400/10"
                                >
                                    <Pencil size={20} />
                                </button>
                                <button
                                    onClick={async () => {
                                        const confirm = await Swal.fire({ title: '¿Eliminar?', icon: 'warning', showCancelButton: true, background: "#111827", color: "#fff" });
                                        if (confirm.isConfirmed) await deleteConsoleAction(item.id);
                                    }}
                                    className="btn btn-square btn-ghost btn-sm text-red-400 hover:bg-red-400/10"
                                >
                                    <Trash size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL DE VISTA (VIEW) */}
            <dialog id="modal_view" className="modal">
                <div className="modal-box bg-[#111827] border border-white/10 max-w-lg p-0 overflow-hidden shadow-2xl">
                    {viewingConsole && (
                        <>
                            <div className="relative h-64 w-full">
                                <img src={viewingConsole.image || "/imgs/no-console.jpeg"} className="w-full h-full object-cover" />
                                <button onClick={() => (document.getElementById("modal_view") as HTMLDialogElement).close()} className="absolute top-4 right-4 btn btn-circle btn-sm bg-black/50 border-none text-white hover:bg-black">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-3xl font-bold text-white">{viewingConsole.name}</h3>
                                    <span className="badge badge-primary p-3">{viewingConsole.manufacturer}</span>
                                </div>
                                <div className="space-y-4 text-gray-300">
                                    <div className="flex items-center gap-3">
                                        <CalendarBlank size={22} className="text-indigo-400" />
                                        <span className="text-sm font-medium tracking-wide uppercase">Detalles de Plataforma</span>
                                    </div>
                                    <div className="divider opacity-10 my-1"></div>
                                    <p className="text-gray-400 leading-relaxed italic text-lg">
                                        "{viewingConsole.description}"
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop bg-black/70 backdrop-blur-md">
                    <button>close</button>
                </form>
            </dialog>

            {/* MODAL FORMULARIO (CREAR/EDITAR) */}
            <dialog id="modal_consola" className="modal">
                <div className="modal-box bg-[#111827] border border-white/10 max-w-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        {editingConsole ? <Pencil className="text-yellow-400" /> : <Plus className="text-indigo-500" />}
                        {editingConsole ? "Editar Consola" : "Registrar Nueva Consola"}
                    </h3>
                    <form onSubmit={handleAction} className="space-y-5 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label text-gray-400"><span className="flex items-center gap-2"><GameController size={18} /> Nombre</span></label>
                                <input
                                    type="text"
                                    className={`input input-bordered bg-gray-800 border-white/10 ${errors.name ? 'border-red-500' : ''}`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name[0]}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-400"><span className="flex items-center gap-2"><Buildings size={18} /> Fabricante</span></label>
                                <input
                                    type="text"
                                    className={`input input-bordered bg-gray-800 border-white/10 ${errors.manufacturer ? 'border-red-500' : ''}`}
                                    value={formData.manufacturer}
                                    onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                                />
                                {errors.manufacturer && <span className="text-red-500 text-xs mt-1">{errors.manufacturer[0]}</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-400"><span className="flex items-center gap-2"><FileText size={18} /> Descripción</span></label>
                            <textarea
                                className={`textarea textarea-bordered h-24 bg-gray-800 border-white/10 ${errors.description ? 'border-red-500' : ''}`}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                            {errors.description && <span className="text-red-500 text-xs mt-1">{errors.description[0]}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label text-gray-400"><span className="flex items-center gap-2"><ImageIcon size={18} /> Imagen</span></label>
                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-white/5">
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="file-input file-input-bordered file-input-primary w-full bg-gray-800"
                                    onChange={(e) => {
                                        const f = e.target.files?.[0];
                                        if (f) { setFile(f); setPreview(URL.createObjectURL(f)); }
                                    }}
                                />
                                {preview && (
                                    <div className="avatar relative">
                                        <div className="w-16 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={preview} alt="Preview" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-action gap-3">
                            <button type="button" className="btn btn-ghost" onClick={() => (document.getElementById("modal_consola") as HTMLDialogElement).close()}>Cancelar</button>
                            <button type="submit" className="btn btn-primary px-10">Guardar</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={resetAll}>close</button>
                </form>
            </dialog>
        </div>
    );
}