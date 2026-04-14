"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getGameByIdAction, updateGameAction, getConsolesAction } from "@/app/actions";
import { CaretLeft, Save } from "@phosphor-icons/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { z } from "zod";

// Usamos el esquema para validar en el cliente antes de enviar
const editSchema = z.object({
    title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
    price: z.number().positive("El precio debe ser mayor a 0"),
    console_id: z.number().min(1, "Selecciona una plataforma"),
});

export default function EditGamePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const gameId = parseInt(id);

    const [formData, setFormData] = useState({ title: "", price: 0, cover: "", console_id: 0, description: "" });
    const [consoles, setConsoles] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        async function loadData() {
            const [gameResult, consolesResult] = await Promise.all([
                getGameByIdAction(gameId),
                getConsolesAction()
            ]);

            if (gameResult.success && gameResult.game) {
                setFormData({
                    title: gameResult.game.title,
                    price: gameResult.game.price,
                    cover: gameResult.game.cover || "",
                    console_id: gameResult.game.console_id,
                    description: gameResult.game.description || ""
                });
            }

            if (consolesResult.success && consolesResult.consoles) {
                setConsoles(consolesResult.consoles);
            }
            setLoading(false);
        }
        loadData();
    }, [gameId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 1. Validación con Zod
        const validation = editSchema.safeParse({
            title: formData.title,
            price: formData.price,
            console_id: formData.console_id,
        });

        if (!validation.success) {
            setErrors(validation.error.flatten().fieldErrors);
            setIsSubmitting(false);
            return;
        }

        // 2. Preparar UN SOLO FormData con todo
        const data = new FormData();
        data.append("title", formData.title);
        data.append("price", formData.price.toString());
        data.append("console_id", formData.console_id.toString());
        data.append("description", formData.description);

        // Si hay archivo nuevo, lo mandamos como 'newCover'
        if (file) {
            data.append("newCover", file);
        }

        // 3. Llamar a la acción (AHORA CON 2 ARGUMENTOS)
        const result = await updateGameAction(gameId, data);

        if (result.success) {
            await Swal.fire({
                title: '¡Actualizado!',
                text: 'El juego se guardó correctamente.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                background: '#111827',
                color: '#ffffff'
            });
            router.push('/games');
            router.refresh();
        } else {
            Swal.fire({
                title: 'Error',
                text: result.error || "No se pudo actualizar.",
                icon: 'error',
                background: '#111827',
                color: '#ffffff'
            });
            setIsSubmitting(false);
        }
    };

    if (loading) return <div className="flex justify-center items-center min-h-screen text-white">Cargando datos...</div>;

    return (
        <div className="min-h-screen p-4 md:p-8 animate-fadeIn">
            <div className="max-w-2xl mx-auto mb-6">
                <Link href="/games" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <CaretLeft size={20} /> Volver a la biblioteca
                </Link>
            </div>

            <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
                    <h1 className="text-3xl font-bold text-white">Editar Juego</h1>
                    <p className="text-indigo-100 opacity-80 mt-1">Modificando: {formData.title}</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* TÍTULO */}
                        <div className="form-control md:col-span-2">
                            <label className="label-text text-gray-400 mb-2 block">Título del Videojuego</label>
                            <input
                                type="text"
                                className={`input input-bordered w-full bg-gray-800/50 ${errors.title ? 'border-red-500' : ''}`}
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                            {errors.title && <span className="text-red-500 text-xs mt-1">{errors.title[0]}</span>}
                        </div>

                        {/* PRECIO */}
                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 block">Precio (USD)</label>
                            <input
                                type="number"
                                step="0.01"
                                className="input input-bordered w-full bg-gray-800/50"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                            />
                        </div>

                        {/* PLATAFORMA */}
                        <div className="form-control">
                            <label className="label-text text-gray-400 mb-2 block">Plataforma</label>
                            <select
                                className="select select-bordered w-full bg-gray-800/50"
                                value={formData.console_id}
                                onChange={(e) => setFormData({ ...formData, console_id: Number(e.target.value) })}
                            >
                                {consoles.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* IMAGEN SECCIÓN */}
                    <div className="space-y-4">
                        <label className="label-text text-gray-400 block">Portada del Juego</label>
                        <div className="flex items-center gap-6 p-4 bg-gray-800/30 rounded-2xl border border-white/5">
                            <div className="relative group">
                                <img
                                    src={preview || (formData.cover.startsWith('http') ? formData.cover : '/imgs/no-cover.jpeg')}
                                    alt="Preview"
                                    className="w-24 h-32 object-cover rounded-xl shadow-xl border border-white/10"
                                    onError={(e) => { (e.target as HTMLImageElement).src = "/imgs/no-cover.jpeg"; }}
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="file-input file-input-primary file-input-sm w-full"
                                    onChange={(e) => {
                                        const selected = e.target.files?.[0];
                                        if (selected) {
                                            setFile(selected);
                                            setPreview(URL.createObjectURL(selected));
                                        }
                                    }}
                                />
                                <p className="text-[10px] text-gray-500 italic">
                                    Recomendado: 600x800px. Se subirá a Vercel Blob.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTONES */}
                    <div className="flex gap-4 pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary flex-1 gap-2 shadow-lg shadow-indigo-500/20"
                        >
                            {isSubmitting ? <span className="loading loading-spinner"></span> : <Save size={20} />}
                            Guardar Cambios
                        </button>
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="btn btn-ghost"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}