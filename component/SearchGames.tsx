"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function SearchGames({ consoles }: { consoles: { id: number; name: string }[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const updateParams = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        params.set("page", "1");
        startTransition(() => router.push(`/games?${params.toString()}`));
    };

    return (
        <div className="flex items-center gap-3">
            {/* FILTRO CONSOLA */}
            <select
                className="select select-bordered bg-indigo-950/80 border-indigo-500/30 text-white rounded-2xl focus:border-indigo-500 hover:border-indigo-400 transition-all"
                defaultValue={searchParams.get("console") || ""}
                onChange={(e) => updateParams("console", e.target.value)}
            >
                <option value="">All platforms</option>
                {consoles.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>

            {/* SEARCH */}
            <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                    <MagnifyingGlass size={20} weight="bold" className={isPending ? "animate-spin" : ""} />
                </div>
                <input
                    type="text"
                    placeholder="Search games..."
                    className="input input-bordered w-full pl-10 bg-white/5 border-white/10 text-white focus:border-indigo-500 transition-all rounded-2xl"
                    defaultValue={searchParams.get("search")?.toString()}
                    onChange={(e) => updateParams("search", e.target.value)}
                />
            </div>
        </div>
    );
}