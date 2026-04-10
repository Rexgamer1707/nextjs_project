"use client";
import { useRouter } from "next/navigation";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// ✅ Agregamos searchQuery a la definición de tipos
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    searchQuery: string;
}

export default function Pagination({ totalPages, currentPage, searchQuery }: PaginationProps) {
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        // ✅ Ahora incluimos el searchQuery en la URL para que la búsqueda se mantenga al cambiar de página
        // Si searchQuery está vacío, solo mandará la página.
        const searchParam = searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : "";
        router.push(`/games?page=${newPage}${searchParam}`);
    };

    return (
        <div className="flex justify-center items-center gap-4 mt-12 pb-10">
            <div className="join bg-black/40 backdrop-blur-md border border-white/10 p-1 rounded-2xl shadow-2xl">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="join-item btn btn-md btn-ghost text-white disabled:text-gray-600"
                >
                    <CaretLeft size={20} weight="bold" />
                </button>

                <div className="join-item px-6 flex items-center bg-indigo-600/20 text-indigo-400 font-bold border-x border-white/5">
                    Page {currentPage} of {totalPages}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="join-item btn btn-md btn-ghost text-white disabled:text-gray-600"
                >
                    <CaretRight size={20} weight="bold" />
                </button>
            </div>
        </div>
    );
}