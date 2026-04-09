import { PrismaClient } from '@/src/generated/prisma';
import { PrismaNeon } from '@prisma/adapter-neon';
import Link from 'next/link';
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

const prisma = new PrismaClient({
    adapter: new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
})

export default async function GameDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // 1. Descomponemos el params con await
    const { id } = await params;
    const gameId = parseInt(id);

    const game = await prisma.Games.findUnique({
        where: { id: gameId },
        include: { console: true }
    });

    if (!game) return <div className="p-10 text-white text-center">Juego no encontrado</div>;

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Link href="/games" className="btn btn-ghost mb-6 gap-2 text-gray-400">
                <CaretLeft size={20} /> Back to Collection
            </Link>

            <div className="flex flex-col md:flex-row gap-8 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <img
                    src={`/uploads/${game.cover}`}
                    alt={game.title}
                    className="w-full md:w-72 rounded-2xl shadow-2xl object-cover"
                    style={{
                        minHeight: '380px',
                        backgroundImage: 'url(/imgs/no-cover.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="flex-1">
                    <div className="badge badge-primary mb-2">{game.console.name}</div>
                    <h1 className="text-4xl font-bold text-white mb-4">{game.title}</h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">{game.description}</p>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                        <div>
                            <p className="text-gray-500 text-sm">Developer</p>
                            <p className="text-white font-medium">{game.developer}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Release Date</p>
                            <p className="text-white font-medium">{game.releaseDate.toDateString()}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Price</p>
                            <p className="text-emerald-400 font-bold text-xl">${game.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}