"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getGameByIdAction, updateGameAction, getConsolesAction } from "@/app/actions";
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { z } from "zod";

const editSchema = z.object({
    title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
    price: z.number().positive("El precio debe ser mayor a 0"),
    console_id: z.number().min(1, "Selecciona una plataforma"),
});

async function compressImage(file: File): Promise<File> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                let { width, height } = img;
                const maxDim = 1200;
                if (width > maxDim || height > maxDim) {
                    if (width > height) { height = (height / width) * maxDim; width = maxDim; }
                    else { width = (width / height) * maxDim; height = maxDim; }
                }
                canvas.width = width;
                canvas.height = height;
                canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
                canvas.toBlob(
                    (blob) => resolve(new File([blob!], file.name, { type: "image/jpeg" })),
                    "image/jpeg", 0.8
                );
            };
        };
    });
}

export default function EditGamePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const gameId = parseInt(id);

    const [formData, setFormData] = useState({ title: "", price: 0, cover: "", console_id: 0 });
    const [consoles, setConsoles] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

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
                    console_id: gameResult.game.console_id
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

        const validation = editSchema.safeParse({
            title: formData.title,
            price: formData.price,
            console_id: formData.console_id,
        });

        if (!validation.success) {
            setErrors(validation.error.flatten().fieldErrors);
            return;
        }

        setErrors({});

        const data = new FormData();
        if (file) data.append("newCover", file);

        const result = await updateGameAction(
            gameId,
            { title: formData.title, price: formData.price, cover: formData.cover, console_id: formData.console_id },
            data
        );

        if (result.success) {
            await Swal.fire({
                title: '¡Cambios guardados!',
                text: `"${formData.title}" fue actualizado.`,
                icon: 'success',
                timer: 2000,
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
        }
    };

    if (loading) return <div className="p-20 text-center text-white">Cargando...</div>;

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-2xl mx-auto mb-6">
                <Link href="/games" className="btn btn-ghost btn-sm gap-2 text-gray-400 hover:text-white">
                    <CaretLeft size={18} /> Back
                </Link>
            </div>

            <div className="max-w-2xl mx-auto bg-black/40 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                    <h1 className="text-2xl font-bold text-white">
                        Editando: <span className="opacity-80">{formData.title}</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* TITLE */}
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Título</span></label>
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title[0]}</p>}
                    </div>

                    {/* PRICE */}
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Precio ($)</span></label>
                        <input
                            type="number"
                            step="0.01"
                            className="input input-bordered w-full"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        />
                        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price[0]}</p>}
                    </div>

                    {/* CONSOLA */}
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Plataforma</span></label>
                        <select
                            className="select select-bordered w-full"
                            value={formData.console_id}
                            onChange={(e) => setFormData({ ...formData, console_id: Number(e.target.value) })}
                        >
                            {consoles.map((c) => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                        </select>
                        {errors.console_id && <p className="text-red-500 text-sm mt-1">{errors.console_id[0]}</p>}
                    </div>

                    {/* COVER */}
                    <div className="form-control">
                        <label className="label"><span className="label-text text-gray-400">Cambiar imagen (opcional)</span></label>
                        <input
                            type="file"
                            accept="image/*"
                            className="file-input w-full"
                            onChange={async (e) => {
                                const selected = e.target.files?.[0] || null;
                                if (selected) {
                                    const compressed = await compressImage(selected);
                                    setFile(compressed);
                                    setPreview(URL.createObjectURL(compressed));
                                } else {
                                    setFile(null);
                                    setPreview(null);
                                }
                            }}
                        />
                    </div>

                    {/* PREVIEW */}
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                        <img
                            src={preview ?? (formData.cover === "no-cover.jpeg" ? "/imgs/no-cover.jpeg" : `/uploads/${formData.cover}`)}
                            alt="Preview"
                            className="w-20 h-28 object-cover rounded-lg shadow-md"
                            onError={(e) => { (e.target as HTMLImageElement).src = "/imgs/no-cover.jpeg"; }}
                        />
                        <p className="text-xs text-gray-500">
                            {preview ? "Nueva imagen seleccionada" : "Imagen actual del juego"}
                        </p>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <button type="submit" className="btn btn-primary flex-1">Guardar Cambios</button>
                        <button type="button" onClick={() => router.back()} className="btn btn-ghost">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}