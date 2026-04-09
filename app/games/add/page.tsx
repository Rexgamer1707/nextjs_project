"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createGameAction, getConsolesAction } from "@/app/actions";
import { Plus, CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { z } from "zod";
import Swal from "sweetalert2";

const gameSchema = z.object({
    title: z.string().min(3, "Title is required"),
    price: z.number().positive("Price must be greater than 0"),
    console_id: z.number().min(1, "Select a platform"),
    description: z.string().min(10, "Description too short"),
    releaseDate: z.string().min(1, "Release date is required"), // 👈
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

export default function AddGamePage() {
    const router = useRouter();
    const [preview, setPreview] = useState<string | null>(null);
    const [consoles, setConsoles] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        price: 0,
        console_id: 0,
        description: "",
        releaseDate: "" // 👈
    });

    useEffect(() => {
        async function fetchConsoles() {
            const result = await getConsolesAction();
            if (result.success && result.consoles) {
                setConsoles(result.consoles);
                if (result.consoles.length > 0) {
                    setFormData(prev => ({ ...prev, console_id: result.consoles[0].id }));
                }
            }
        }
        fetchConsoles();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = gameSchema.safeParse(formData);
        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            return;
        }

        const data = new FormData();
        data.append("title", formData.title);
        data.append("price", String(formData.price));
        data.append("console_id", String(formData.console_id));
        data.append("description", formData.description);
        data.append("releaseDate", formData.releaseDate); // 👈
        if (file) data.append("cover", file);

        const res = await createGameAction(data);

        if (res.success) {
            await Swal.fire({
                title: '¡Juego creado!',
                text: `"${formData.title}" fue agregado a tu colección.`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
                background: '#111827',
                color: '#ffffff'
            });
            router.push("/games");
            router.refresh();
        } else {
            Swal.fire({
                title: 'Error',
                text: res.error || "No se pudo crear el juego.",
                icon: 'error',
                background: '#111827',
                color: '#ffffff'
            });
        }
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-2xl mx-auto mb-6">
                <Link href="/games" className="btn btn-ghost btn-sm gap-2 text-gray-400 hover:text-white">
                    <CaretLeft size={18} /> Back
                </Link>
            </div>

            <div className="max-w-2xl mx-auto bg-black/40 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                    <div className="flex items-center gap-3">
                        <Plus size={24} className="text-white" />
                        <h1 className="text-2xl font-bold text-white">Add Game</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* TITLE */}
                    <input
                        type="text"
                        placeholder="Game title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="input input-bordered w-full"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title[0]}</p>}

                    {/* FILE */}
                    <input
                        type="file"
                        accept="image/*"
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
                        className="file-input w-full"
                    />
                    {preview && (
                        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10">
                            <img src={preview} alt="Cover preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                    {errors.cover && <p className="text-red-500 text-sm">{errors.cover[0]}</p>}

                    {/* PRICE */}
                    <input
                        type="number"
                        placeholder="Price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        className="input input-bordered w-full"
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price[0]}</p>}

                    {/* RELEASE DATE */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-400">Release Date</span>
                        </label>
                        <input
                            type="date"
                            value={formData.releaseDate}
                            onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                            className="input input-bordered w-full"
                        />
                        {errors.releaseDate && <p className="text-red-500 text-sm mt-1">{errors.releaseDate[0]}</p>}
                    </div>

                    {/* PLATFORM */}
                    <select
                        value={formData.console_id}
                        onChange={(e) => setFormData({ ...formData, console_id: Number(e.target.value) })}
                        className="select select-bordered w-full"
                    >
                        {consoles.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                    {errors.console_id && <p className="text-red-500 text-sm">{errors.console_id[0]}</p>}

                    {/* DESCRIPTION */}
                    <textarea
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="textarea textarea-bordered w-full"
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description[0]}</p>}

                    <button className="btn btn-primary w-full">
                        Create Game
                    </button>
                </form>
            </div>
        </div>
    );
}