"use server";

import { PrismaClient } from '@/src/generated/prisma';
import { PrismaNeon } from '@prisma/adapter-neon';
import { revalidatePath } from 'next/cache';
import { put } from "@vercel/blob";
import { gameSchema, consoleSchema } from "@/component/lib/schemas";

const prisma = new PrismaClient({
    adapter: new PrismaNeon({
        connectionString: process.env.DATABASE_URL!
    })
})


export async function deleteGameAction(id: number) {
    try {
        await prisma.games.delete({ // Corregido a minúsculas
            where: { id: id }
        });

        revalidatePath('/games');
        return { success: true };
    } catch (error) {
        console.error("Error al eliminar:", error);
        return { success: false, error: "No se pudo eliminar el juego" };
    }
}

// CORRECCIÓN: Agregado console_id a la interfaz de data
export async function updateGameAction(id: number, formData: FormData) {
    try {
        const rawData = {
            title: formData.get("title"),
            price: formData.get("price"),
            console_id: formData.get("console_id"),
            description: formData.get("description"),
        };

        const validated = gameSchema.parse(rawData);
        const newCover = formData.get("newCover") as File | null;

        const existingGame = await prisma.games.findUnique({ where: { id } });
        let coverFileName = existingGame?.cover || "/no-cover.jpeg";

        if (newCover && newCover.size > 0) {
            const blob = await put(newCover.name, newCover, { access: 'public' });
            coverFileName = blob.url;
        }

        await prisma.games.update({
            where: { id },
            data: {
                ...validated,
                cover: coverFileName,
                console_id: Number(validated.console_id),
            }
        });

        revalidatePath('/games');
        revalidatePath(`/games/${id}`);
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Error al actualizar" };
    }
}

export async function getGameByIdAction(id: number) {
    try {
        const game = await prisma.games.findUnique({
            where: { id },
            include: { console: true }
        });
        return { success: true, game };
    } catch (error) {
        return { success: false, error: "No se pudo obtener el juego" };
    }
}

export async function createGameAction(formData: FormData) {
    try {
        const data = {
            title: formData.get("title"),
            price: formData.get("price"),
            console_id: formData.get("console_id"),
            description: formData.get("description"),
        };

        const validated = gameSchema.safeParse(data);
        if (!validated.success) return { success: false, errors: validated.error.flatten().fieldErrors };

        const file = formData.get("cover") as File;
        let finalImageUrl = "";

        if (file && file.size > 0) {
            // ✅ SUBIDA A VERCEL BLOB
            const blob = await put(file.name, file, {
                access: 'public',
            });
            finalImageUrl = blob.url; // Guardamos la URL pública (https://...)
        } else {
            finalImageUrl = "/no-cover.jpeg"; // Imagen por defecto en tu carpeta public
        }

        await prisma.games.create({
            data: {
                title: validated.data.title,
                price: validated.data.price,
                console_id: validated.data.console_id,
                description: validated.data.description,
                cover: finalImageUrl, // Guardamos la URL del Blob
                developer: "Pending",
                releaseDate: formData.get("releaseDate") ? new Date(formData.get("releaseDate") as string) : new Date(),
                genre: "Action"
            }
        });

        revalidatePath("/games");
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Error al crear el juego" };
    }
}

export async function getConsolesAction() {
    try {
        const consoles = await prisma.console.findMany({
            orderBy: { name: 'asc' }
        });
        return { success: true, consoles };
    } catch (error) {
        return { success: false, error: "No se pudieron cargar las consolas" };
    }
}

export async function getGamesAction(page: number = 1, pageSize: number = 12, query: string = "", consoleId: number = 0) {
    try {
        const skip = (page - 1) * pageSize;

        const where: any = {};
        if (query) where.title = { contains: query, mode: 'insensitive' };
        if (consoleId > 0) where.console_id = consoleId;

        const [games, total] = await Promise.all([
            prisma.games.findMany({
                where,
                skip,
                take: pageSize,
                include: { console: true },
                orderBy: { id: 'desc' }
            }),
            prisma.games.count({ where })
        ]);

        return { success: true, games, totalPages: Math.ceil(total / pageSize), currentPage: page };
    } catch (error) {
        console.error("Error en getGamesAction:", error);
        return { success: false, error: "No se pudieron cargar los juegos" };
    }
}

export async function getConsolesWithCountAction() {
    try {
        const consoles = await prisma.console.findMany({
            orderBy: { name: 'asc' },
            include: {
                _count: { select: { games: true } }
            }
        });
        return { success: true, consoles };
    } catch (error) {
        return { success: false, error: "No se pudieron cargar las consolas" };
    }
}

export async function createConsoleAction(formData: FormData) {
    try {
        // Validamos los campos de texto
        const rawData = {
            name: formData.get("name"),
            manufacturer: formData.get("manufacturer"),
            description: formData.get("description"),
            releaseDate: formData.get("releaseDate"),
        };

        const validated = consoleSchema.parse(rawData);
        const file = formData.get("image") as File;

        let imageUrl = "/imgs/no-console.jpeg";

        if (file && file.size > 0) {
            const blob = await put(file.name, file, { access: 'public' });
            imageUrl = blob.url;
        }

        await prisma.console.create({
            data: {
                ...validated,
                image: imageUrl,
            }
        });

        revalidatePath("/consoles");
        return { success: true };
    } catch (error) {
        console.error("Error en createConsoleAction:", error);
        return { success: false, error: "Error al crear la consola" };
    }
}
export async function deleteConsoleAction(id: number) {
    try {
        await prisma.console.delete({ where: { id } });
        revalidatePath("/consoles");
        return { success: true };
    } catch (error) {
        return { success: false, error: "No se pudo eliminar la consola" };
    }
}

export async function getConsoleByIdAction(id: number) {
    try {
        const console = await prisma.console.findUnique({ where: { id } });
        return { success: true, console };
    } catch (error) {
        return { success: false, error: "No se pudo obtener la consola" };
    }
}

export async function updateConsoleAction(id: number, formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            manufacturer: formData.get("manufacturer"),
            description: formData.get("description"),
            releaseDate: formData.get("releaseDate"),
        };

        const validated = consoleSchema.parse(rawData);
        const file = formData.get("image") as File;

        // Buscamos la consola actual para no perder la imagen si no se sube una nueva
        const existingConsole = await prisma.console.findUnique({ where: { id } });
        let imageUrl = existingConsole?.image || "/imgs/no-console.jpeg";

        if (file && file.size > 0) {
            const blob = await put(file.name, file, { access: 'public' });
            imageUrl = blob.url;
        }

        await prisma.console.update({
            where: { id },
            data: {
                ...validated,
                image: imageUrl,
            }
        });

        revalidatePath("/consoles");
        return { success: true };
    } catch (error) {
        console.error("Error en updateConsoleAction:", error);
        return { success: false, error: "Error al actualizar la consola" };
    }
}

export async function getDashboardStatsAction() {
    try {
        const [totalGames, totalConsoles, gamesByConsole, recentGames, priceStats] = await Promise.all([
            prisma.games.count(),
            prisma.console.count(),
            prisma.console.findMany({
                include: { _count: { select: { games: true } } },
                orderBy: { name: 'asc' }
            }),
            prisma.games.findMany({
                take: 5,
                orderBy: { id: 'desc' },
                include: { console: true }
            }),
            prisma.games.aggregate({
                _avg: { price: true },
                _max: { price: true },
                _min: { price: true },
                _sum: { price: true }
            })
        ]);

        return {
            success: true,
            totalGames,
            totalConsoles,
            gamesByConsole,
            recentGames,
            priceStats
        };
    } catch (error) {
        return { success: false, error: "Error al cargar estadísticas" };
    }
}