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
    X 
} from "@phosphor-icons/react";
import Swal from "sweetalert2";

export default function ConsolesClient({ initialConsoles }: { initialConsoles: any[] }) {
    // --- ESTADOS ---
    const [formData, setFormData] = useState({ name: "", manufacturer: "", description: "" });
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const [editingConsole, setEditingConsole] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- LÓGICA DE FORMULARIO ---
    const validate = () => {
        const result = consoleSchema.safeParse(formData);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return false;
        }
        setErrors({});
        return true;
    };

    const handleAction = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        const data = new FormData();
        data.append("name", formData.name);
        data.append("manufacturer", formData.manufacturer);
        data.append("description", formData.description);
        if (file) data.append("image", file);

        const res = editingConsole 
            ? await updateConsoleAction(editingConsole.id, data)
            : await createConsoleAction(data);

        if (res.success) {
            await Swal.fire({
                title: editingConsole ? "¡Actualizada!" : "¡Creada!",
                icon: "success",
                background: "#111827",
                color: "#ffffff"
            });
            resetAll();
            (document.getElementById("modal_consola") as HTMLDialogElement).close();
        }
    };

    const resetAll = () => {
        setFormData({ name: "", manufacturer: "", description: "" });
        setEditingConsole(null);
        setFile(null);
        setPreview(null);
        setErrors({});
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleDelete = async (id: number) => {
        const confirm = await Swal.fire({
            title: '¿Eliminar consola?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            background: "#111827",
            color: "#ffffff"
        });

        if (confirm.isConfirmed) {
            await deleteConsoleAction(id);
        }
    };

    return (
        <div className="p-8">
            {/* CABECERA */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">Consolas</h1>
                    <p className="text-indigo-400 mt-1">Administra las plataformas de tu catálogo</p>
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
                            <img 
                                src={item.image || "/imgs/no-console.jpeg"} 
                                alt={item.name} 
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3">
                                <span className="badge badge-primary font-bold shadow-lg">{item.manufacturer}</span>
                            </div>
                        </figure>
                        
                        <div className="card-body p-5">
                            <h2 className="card-title text-white text-xl mb-1">{item.name}</h2>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 h-10">{item.description}</p>
                            
                            <div className="card-actions justify-end border-t border-white/5 pt-4 gap-2">
                                <button className="btn btn-square btn-ghost btn-sm text-blue-400 hover:bg-blue-400/10">
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
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-square btn-ghost btn-sm text-red-400 hover:bg-red-400/10"
                                >
                                    <Trash size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL DEL FORMULARIO */}
            <dialog id="modal_consola" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#111827] border border-white/10 max-w-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        {editingConsole ? <Pencil className="text-yellow-400" /> : <Plus className="text-indigo-500" />}
                        {editingConsole ? "Editar Consola" : "Registrar Nueva Consola"}
                    </h3>

                    <form onSubmit={handleAction} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label text-gray-400"><span className="flex items-center gap-2"><GameController size={18}/> Nombre</span></label>
                                <input 
                                    type="text"
                                    className={`input input-bordered bg-gray-800 ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10'}`}
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name[0]}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label text-gray-400"><span className="flex items-center gap-2"><Buildings size={18}/> Fabricante</span></label>
                                <input 
                                    type="text"
                                    className={`input input-bordered bg-gray-800 ${errors.manufacturer ? 'border-red-500 ring-1 ring-red-500' : 'border-white/10'}`}
                                    value={formData.manufacturer}
                                    onChange={(e) => setFormData({...formData, manufacturer: e.target.value})}
                                />
                                {errors.manufacturer && <span className="text-red-500 text-xs mt-1">{errors.manufacturer[0]}</span>}
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label text-gray-400"><span className="flex items-center gap-2"><FileText size={18}/> Descripción</span></label>
                            <textarea 
                                className={`textarea textarea-bordered h-24 bg-gray-800 ${errors.description ? 'border-red-500' : 'border-white/10'}`}
                                value={formData.description}
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                            />
                            {errors.description && <span className="text-red-500 text-xs mt-1">{errors.description[0]}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label text-gray-400"><span className="flex items-center gap-2"><ImageIcon size={18}/> Imagen</span></label>
                            <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-white/5">
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="file-input file-input-bordered file-input-primary w-full bg-gray-800" 
                                    onChange={(e) => {
                                        const f = e.target.files?.[0];
                                        if(f) { setFile(f); setPreview(URL.createObjectURL(f)); }
                                    }}
                                />
                                {preview && (
                                    <div className="avatar relative">
                                        <div className="w-16 rounded-lg ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={preview} alt="Preview" />
                                        </div>
                                        <button 
                                            type="button" 
                                            onClick={() => { setFile(null); setPreview(null); if(fileInputRef.current) fileInputRef.current.value=""; }}
                                            className="absolute -top-2 -right-2 btn btn-circle btn-xs btn-error"
                                        ><X size={12} /></button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="modal-action gap-3">
                            <button type="button" className="btn btn-ghost" onClick={() => (document.getElementById("modal_consola") as HTMLDialogElement).close()}>Cancelar</button>
                            <button type="submit" className="btn btn-primary px-10">
                                {editingConsole ? "Guardar Cambios" : "Crear Consola"}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}