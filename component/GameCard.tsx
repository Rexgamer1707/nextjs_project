"use client";

import { useRouter } from "next/navigation";
import { Trash, PencilLine, Eye } from "@phosphor-icons/react";
import { deleteGameAction } from "@/app/actions";
import Swal from "sweetalert2";

export default function GameCard({ game }: { game: any }) {
    const router = useRouter();
    const defaultCover = "/imgs/no-cover.jpeg";

    // Función para manejar la eliminación
    const handleDelete = async (id: number) => {
        // 2. Configurar la alerta de SweetAlert2
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: `Vas a eliminar "${game.title}". ¡Esta acción no se puede deshacer!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4f46e5', // Color Indigo (tu color primario)
            cancelButtonColor: '#1f2937', // Color oscuro
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            background: '#111827', // Fondo oscuro para combinar con tu dashboard
            color: '#ffffff',      // Texto blanco
            backdrop: `rgba(0,0,0,0.6)`
        });

        // 3. Si el usuario confirma
        if (result.isConfirmed) {
            const response = await deleteGameAction(id);

            if (response.success) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El juego ha sido borrado de tu colección.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                    background: '#111827',
                    color: '#ffffff'
                });
                router.refresh(); // Refresca la lista
            } else {
                Swal.fire({
                    title: 'Error',
                    text: response.error,
                    icon: 'error',
                    background: '#111827',
                    color: '#ffffff'
                });
            }
        }
    };

    return (
        <div className="card bg-black/40 backdrop-blur-md border border-white/10 shadow-xl hover:border-indigo-500/50 transition-all group overflow-hidden">
            <figure className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                    src={game.cover === "no-cover.jpeg"
                        ? "/imgs/no-cover.jpeg"
                        : `/uploads/${game.cover}`}
                    alt={game.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== window.location.origin + defaultCover) {
                            target.src = defaultCover;
                        }
                    }}
                />
                <div className="absolute top-3 right-3 badge badge-primary font-bold shadow-lg">
                    ${game.price}
                </div>
            </figure>

            <div className="card-body p-5">
                <h2 className="card-title text-white text-lg font-bold truncate">{game.title}</h2>

                {/* Botones con Funcionalidad */}
                <div className="card-actions justify-end mt-4 pt-4 border-t border-white/5 gap-1">

                    {/* DETAILS */}
                    <button
                        onClick={() => router.push(`/games/${game.id}`)} // Quitamos /dashboard
                        className="btn btn-sm btn-ghost text-info hover:bg-info/10 gap-1"
                    >
                        <Eye size={16} />
                        <span className="hidden lg:inline">Details</span>
                    </button>

                    {/* EDIT */}
                    <button
                        onClick={() => router.push(`/games/edit/${game.id}`)} // Quitamos /dashboard
                        className="btn btn-sm btn-ghost text-warning hover:bg-warning/10 gap-1"
                    >
                        <PencilLine size={16} />
                        <span className="hidden lg:inline">Edit</span>
                    </button>

                    {/* DELETE */}
                    <button
                        onClick={() => handleDelete(game.id)}
                        className="btn btn-sm btn-ghost text-error hover:bg-error/10 gap-1"
                    >
                        <Trash size={16} />
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}