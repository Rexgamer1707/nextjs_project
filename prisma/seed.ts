import 'dotenv/config'
import { PrismaClient } from '../src/generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('🌱 Starting seed...')

    // -----------------------------
    // 1. Clean database
    // -----------------------------
    // IMPORTANTE: Los nombres deben coincidir con tu schema.prisma
    await prisma.Games.deleteMany()   // Antes decía 'game' (error)
    await prisma.console.deleteMany() // Este estaba bien si el modelo es 'console'

    console.log('🧹 Database cleaned')

    // -----------------------------
    // 2. Create Consoles
    // -----------------------------
    await prisma.console.createMany({
        data: [
            {
                name: 'PlayStation 5',
                manufacturer: 'Sony Interactive Entertainment',
                releaseDate: new Date('2020-11-12'), // Corregido camelCase del schema
                description: 'The PlayStation 5 (PS5) is a home video game console bringing 4K gaming at 120Hz and ray tracing support.',
            },
            {
                name: 'Xbox Series X',
                manufacturer: 'Microsoft',
                releaseDate: new Date('2020-11-10'),
                description: 'The Xbox Series X is a high-performance console, featuring a custom AMD processor and 12 TFLOPS of graphical power.',
            },
            {
                name: 'Nintendo Switch OLED Model',
                manufacturer: 'Nintendo',
                releaseDate: new Date('2021-10-08'),
                description: 'A hybrid console that can be used as a home console and a portable handheld device, now with a vibrant OLED screen.',
            },
            {
                name: 'Nintendo Switch 2',
                manufacturer: 'Nintendo',
                releaseDate: new Date('2025-06-05'),
                description: 'The successor to the popular Nintendo Switch, featuring larger magnetic Joy-cons and enhanced performance.',
            },
            {
                name: 'Steam Deck OLED',
                manufacturer: 'Valve',
                releaseDate: new Date('2023-11-16'),
                description: 'A powerful handheld gaming computer that plays PC games from your Steam library on the go.',
            },
        ],
    })

    console.log('🎮 5 consoles seeded')

    // -----------------------------
    // 3. Get consoles from DB
    // -----------------------------
    const allConsoles = await prisma.console.findMany()

    const ps5 = allConsoles.find(c => c.name === 'PlayStation 5')
    const xbox = allConsoles.find(c => c.name === 'Xbox Series X')
    const switchOLED = allConsoles.find(c => c.name === 'Nintendo Switch OLED Model')
    const switch2 = allConsoles.find(c => c.name === 'Nintendo Switch 2')
    const steamDeck = allConsoles.find(c => c.name === 'Steam Deck OLED')

    // -----------------------------
    // 4. Create Games
    // -----------------------------
    const gamesData = [
        // PS5
        { title: 'God of War Ragnarök', developer: 'Santa Monica Studio', releaseDate: new Date('2022-11-09'), price: 69.99, genre: 'Action-adventure', description: 'Kratos and Atreus journey through the Nine Realms.', console_id: ps5?.id || 0 },
        { title: 'Spider-Man 2', developer: 'Insomniac Games', releaseDate: new Date('2023-10-20'), price: 69.99, genre: 'Action-adventure', description: 'Peter Parker and Miles Morales unite.', console_id: ps5?.id || 0 },
        { title: 'Demon’s Souls', developer: 'Bluepoint Games', releaseDate: new Date('2020-11-12'), price: 69.99, genre: 'Action RPG', description: 'A remake of the classic Souls game.', console_id: ps5?.id || 0 },
        { title: 'Ratchet & Clank: Rift Apart', developer: 'Insomniac Games', releaseDate: new Date('2021-06-11'), price: 69.99, genre: 'Platformer', description: 'Dimensional adventure.', console_id: ps5?.id || 0 },
        { title: 'Returnal', developer: 'Housemarque', releaseDate: new Date('2021-04-30'), price: 69.99, genre: 'Roguelike', description: 'Sci-fi roguelike shooter.', console_id: ps5?.id || 0 },
        { title: 'Final Fantasy XVI', developer: 'Square Enix', releaseDate: new Date('2023-06-22'), price: 69.99, genre: 'RPG', description: 'Epic fantasy RPG.', console_id: ps5?.id || 0 },
        { title: 'Horizon Forbidden West', developer: 'Guerrilla Games', releaseDate: new Date('2022-02-18'), price: 69.99, genre: 'Action RPG', description: 'Explore the forbidden west.', console_id: ps5?.id || 0 },
        { title: 'Gran Turismo 7', developer: 'Polyphony Digital', releaseDate: new Date('2022-03-04'), price: 69.99, genre: 'Racing', description: 'Real driving simulator.', console_id: ps5?.id || 0 },
        { title: 'Resident Evil 4 Remake', developer: 'Capcom', releaseDate: new Date('2023-03-24'), price: 59.99, genre: 'Survival horror', description: 'Leon returns.', console_id: ps5?.id || 0 },
        { title: 'Assassin’s Creed Mirage', developer: 'Ubisoft', releaseDate: new Date('2023-10-05'), price: 59.99, genre: 'Action-adventure', description: 'Back to roots AC.', console_id: ps5?.id || 0 },
        { title: 'Spider-Man: Miles Morales', developer: 'Insomniac Games', releaseDate: new Date('2020-11-12'), price: 59.99, genre: 'Action-adventure', description: 'Miles Morales learn to be a great spider man .', console_id: ps5?.id || 0 },

        // Xbox
        { title: 'Halo Infinite', developer: '343 Industries', releaseDate: new Date('2021-12-08'), price: 59.99, genre: 'FPS', description: 'Master Chief returns.', console_id: xbox?.id || 0 },
        { title: 'Forza Horizon 5', developer: 'Playground Games', releaseDate: new Date('2021-11-09'), price: 59.99, genre: 'Racing', description: 'Open world Mexico.', console_id: xbox?.id || 0 },
        { title: 'Starfield', developer: 'Bethesda', releaseDate: new Date('2023-09-06'), price: 69.99, genre: 'RPG', description: 'Space exploration.', console_id: xbox?.id || 0 },
        { title: 'Gears 5', developer: 'The Coalition', releaseDate: new Date('2019-09-10'), price: 39.99, genre: 'Shooter', description: 'Gears saga continues.', console_id: xbox?.id || 0 },
        { title: 'Flight Simulator', developer: 'Asobo Studio', releaseDate: new Date('2020-08-18'), price: 59.99, genre: 'Simulation', description: 'Realistic flight sim.', console_id: xbox?.id || 0 },
        { title: 'Fable', developer: 'Playground Games', releaseDate: new Date('2025-01-01'), price: 69.99, genre: 'RPG', description: 'Fantasy reboot.', console_id: xbox?.id || 0 },
        { title: 'Avowed', developer: 'Obsidian', releaseDate: new Date('2024-11-12'), price: 69.99, genre: 'RPG', description: 'Fantasy RPG.', console_id: xbox?.id || 0 },
        { title: 'State of Decay 3', developer: 'Undead Labs', releaseDate: new Date('2025-05-01'), price: 59.99, genre: 'Survival', description: 'Zombie survival.', console_id: xbox?.id || 0 },
        { title: 'Hellblade II', developer: 'Ninja Theory', releaseDate: new Date('2024-05-21'), price: 69.99, genre: 'Action', description: 'Dark journey.', console_id: xbox?.id || 0 },
        { title: 'Everwild', developer: 'Rare', releaseDate: new Date('2025-09-01'), price: 59.99, genre: 'Adventure', description: 'Nature magic.', console_id: xbox?.id || 0 },
        

        // Switch OLED
        { title: 'Zelda: Tears of the Kingdom', developer: 'Nintendo', releaseDate: new Date('2023-05-12'), price: 69.99, genre: 'Adventure', description: 'Hyrule returns.', console_id: switchOLED?.id || 0 },
        { title: 'Pokémon Scarlet', developer: 'Game Freak', releaseDate: new Date('2022-11-18'), price: 59.99, genre: 'RPG', description: 'New region.', console_id: switchOLED?.id || 0 },
        { title: 'Pokémon Violet', developer: 'Game Freak', releaseDate: new Date('2022-11-18'), price: 59.99, genre: 'RPG', description: 'Companion version.', console_id: switchOLED?.id || 0 },
        { title: 'Splatoon 3', developer: 'Nintendo', releaseDate: new Date('2022-09-09'), price: 59.99, genre: 'Shooter', description: 'Ink battles.', console_id: switchOLED?.id || 0 },
        { title: 'Super Mario Odyssey', developer: 'Nintendo', releaseDate: new Date('2017-10-27'), price: 49.99, genre: 'Platformer', description: 'Mario adventure.', console_id: switchOLED?.id || 0 },
        { title: 'Animal Crossing', developer: 'Nintendo', releaseDate: new Date('2020-03-20'), price: 59.99, genre: 'Simulation', description: 'Island life.', console_id: switchOLED?.id || 0 },
        { title: 'Metroid Dread', developer: 'MercurySteam', releaseDate: new Date('2021-10-08'), price: 59.99, genre: 'Action', description: 'Samus returns.', console_id: switchOLED?.id || 0 },
        { title: 'Fire Emblem Engage', developer: 'Intelligent Systems', releaseDate: new Date('2023-01-20'), price: 59.99, genre: 'Strategy', description: 'Tactical RPG.', console_id: switchOLED?.id || 0 },
        { title: 'Luigi’s Mansion 3', developer: 'Next Level Games', releaseDate: new Date('2019-10-31'), price: 49.99, genre: 'Adventure', description: 'Ghost hunting.', console_id: switchOLED?.id || 0 },
        { title: 'Mario Party Superstars', developer: 'Nintendo', releaseDate: new Date('2021-10-29'), price: 59.99, genre: 'Party', description: 'Mini games.', console_id: switchOLED?.id || 0 },

        // Switch 2
        { title: 'Mario Kart 9', developer: 'Nintendo', releaseDate: new Date('2025-12-01'), price: 59.99, genre: 'Racing', description: 'Next MK.', console_id: switch2?.id || 0 },
        { title: 'Zelda Next Gen', developer: 'Nintendo', releaseDate: new Date('2026-03-01'), price: 69.99, genre: 'Adventure', description: 'New Zelda.', console_id: switch2?.id || 0 },
        { title: 'Smash Bros Ultimate 2', developer: 'Nintendo', releaseDate: new Date('2026-08-01'), price: 69.99, genre: 'Fighting', description: 'New Smash.', console_id: switch2?.id || 0 },
        { title: 'Metroid Prime 4', developer: 'Retro Studios', releaseDate: new Date('2025-10-01'), price: 59.99, genre: 'FPS', description: 'Prime returns.', console_id: switch2?.id || 0 },
        { title: 'Donkey Kong Reboot', developer: 'Nintendo', releaseDate: new Date('2025-07-01'), price: 59.99, genre: 'Platformer', description: 'DK returns.', console_id: switch2?.id || 0 },
        { title: 'Kirby’s Dreamland 3', developer: 'HAL Laboratory', releaseDate: new Date('2025-11-01'), price: 49.99, genre: 'Platformer', description: 'Kirby adventure.', console_id: switch2?.id || 0 },
        { title: 'Pikmin 4', developer: 'Nintendo', releaseDate: new Date('2025-05-01'), price: 59.99, genre: 'Strategy', description: 'Pikmin return.', console_id: switch2?.id || 0 },
        { title: 'Xenoblade Chronicles 4', developer: 'Monolith Soft', releaseDate: new Date('2026-01-01'), price: 69.99, genre: 'RPG', description: 'Epic JRPG.', console_id: switch2?.id || 0 },

        // Steam Deck
        { title: 'Hogwarts Legacy', developer: 'Avalanche', releaseDate: new Date('2023-02-10'), price: 59.99, genre: 'RPG', description: 'Wizard world.', console_id: steamDeck?.id || 0 },
        { title: 'Elden Ring', developer: 'FromSoftware', releaseDate: new Date('2022-02-25'), price: 59.99, genre: 'RPG', description: 'Open world souls.', console_id: steamDeck?.id || 0 },
        { title: 'Cyberpunk 2077', developer: 'CD Projekt', releaseDate: new Date('2020-12-10'), price: 49.99, genre: 'RPG', description: 'Futuristic RPG.', console_id: steamDeck?.id || 0 },
        { title: 'The Witcher 3', developer: 'CD Projekt', releaseDate: new Date('2015-05-19'), price: 39.99, genre: 'RPG', description: 'Geralt story.', console_id: steamDeck?.id || 0 },
        { title: 'Red Dead Redemption 2', developer: 'Rockstar', releaseDate: new Date('2018-10-26'), price: 59.99, genre: 'Adventure', description: 'Wild west.', console_id: steamDeck?.id || 0 },
        { title: 'GTA V', developer: 'Rockstar', releaseDate: new Date('2013-09-17'), price: 29.99, genre: 'Action', description: 'Los Santos.', console_id: steamDeck?.id || 0 },
        { title: 'Baldur’s Gate 3', developer: 'Larian', releaseDate: new Date('2023-08-03'), price: 69.99, genre: 'RPG', description: 'D&D RPG.', console_id: steamDeck?.id || 0 },
        { title: 'Hades', developer: 'Supergiant', releaseDate: new Date('2020-09-17'), price: 24.99, genre: 'Roguelike', description: 'Escape hell.', console_id: steamDeck?.id || 0 },
        { title: 'Stardew Valley', developer: 'ConcernedApe', releaseDate: new Date('2016-02-26'), price: 14.99, genre: 'Simulation', description: 'Farming game.', console_id: steamDeck?.id || 0 },
        { title: 'Terraria', developer: 'Re-Logic', releaseDate: new Date('2011-05-16'), price: 9.99, genre: 'Sandbox', description: '2D survival.', console_id: steamDeck?.id || 0 },
    ]

    for (const game of gamesData) {
        if (!game.console_id) continue

        // Usamos prisma.Games porque así lo llamaste en el schema
        await prisma.Games.create({
            data: game,
        })
    }

    console.log('🕹️ 49 games seeded')
    console.log('✅ Seed completed successfully')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })