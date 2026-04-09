import { getGamesAction, getConsolesAction } from "@/app/actions";
import GameCard from "./GameCard";
import Pagination from "./Pagination";
import SearchGames from "./SearchGames";
import AddGameButton from "./AddGameButton";

interface GamesInfoProps {
    currentPage: number;
    searchQuery: string;
    consoleId: number;
}

export default async function GamesInfo({ currentPage, searchQuery, consoleId }: GamesInfoProps) {
    const pageSize = 12;

    const [{ games, totalPages, success }, { consoles }] = await Promise.all([
        getGamesAction(currentPage, pageSize, searchQuery, consoleId),
        getConsolesAction()
    ]);

    if (!success) {
        return (
            <div className="flex flex-col items-center justify-center p-20 text-gray-500 bg-black/20 rounded-3xl border border-white/5">
                <p className="text-xl font-bold text-white">Error al conectar con la base de datos</p>
                <p className="text-sm">Verifica tu conexión a Neon o el DATABASE_URL.</p>
            </div>
        );
    }

    return (
        <div className="flex-1 p-4 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">My Collection</h1>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <p className="text-gray-400 text-sm">
                            {searchQuery ? `Resultados para "${searchQuery}"` : "Explorando todos los juegos"}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 ms-auto">
                    <SearchGames consoles={consoles ?? []} />
                    <AddGameButton />
                </div>
            </div>

            {games && games.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {games.map((game: any) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
                    <div className="bg-white/5 p-4 rounded-full mb-4">
                        <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">No se encontraron juegos</h3>
                    <p className="text-gray-500 mt-1">Intenta con otro nombre o limpia el buscador.</p>
                </div>
            )}

            {totalPages && totalPages > 1 && (
                <div className="mt-12">
                    <Pagination totalPages={totalPages} currentPage={currentPage} searchQuery={searchQuery} />
                </div>
            )}
        </div>
    );
}