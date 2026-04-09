"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line, CartesianGrid } from "recharts";
import { GameController, Desktop, CurrencyDollar, TrendUp, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed"];

export default function DashboardClient({ stats, user }: { stats: any; user: { name: string } }) {
    if (!stats.success) return <div className="p-10 text-white text-center">Error al cargar datos.</div>;

    const { totalGames, totalConsoles, gamesByConsole, recentGames, priceStats } = stats;

    const barData = gamesByConsole.map((c: any) => ({
        name: c.name.replace("Nintendo ", "N. ").replace("PlayStation ", "PS").replace("Xbox ", "Xbox ").replace(" Model", ""),
        games: c._count.games
    }));

    const pieData = gamesByConsole
        .filter((c: any) => c._count.games > 0)
        .map((c: any) => ({ name: c.name, value: c._count.games }));

    const statCards = [
        { label: "Total Games", value: totalGames, icon: GameController, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
        { label: "Platforms", value: totalConsoles, icon: Desktop, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { label: "Avg Price", value: `$${priceStats._avg.price?.toFixed(2) ?? "0"}`, icon: CurrencyDollar, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { label: "Total Value", value: `$${priceStats._sum.price?.toFixed(2) ?? "0"}`, icon: TrendUp, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    ];

    return (
        <div className="p-4 md:p-8 space-y-8">

            {/* WELCOME */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome back, <span className="text-indigo-400">{user.name}</span> 👋</h1>
                    <p className="text-gray-400 mt-1 text-sm">Here's what's happening with your collection.</p>
                </div>
                <Link href="/games" className="btn btn-primary btn-sm gap-2 hidden md:flex">
                    <GameController size={16} /> View Collection
                </Link>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {statCards.map((s) => {
                    const Icon = s.icon;
                    return (
                        <div key={s.label} className={`bg-black/40 border ${s.border} rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-all`}>
                            <div className={`${s.bg} p-3 rounded-xl shrink-0`}>
                                <Icon size={24} className={s.color} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-gray-400 text-sm truncate">{s.label}</p>
                                <p className="text-white font-bold text-2xl truncate">{s.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CHARTS ROW */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* BAR CHART */}
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-white font-bold text-lg">Games per Platform</h2>
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{totalGames} total</span>
                    </div>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={barData} barSize={28}>
                            <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{ background: "#1f2937", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "12px", color: "#fff" }}
                                cursor={{ fill: "rgba(99,102,241,0.08)" }}
                            />
                            <Bar dataKey="games" radius={[6, 6, 0, 0]}>
                                {barData.map((_: any, index: number) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* PIE CHART */}
                <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-white font-bold text-lg">Distribution by Platform</h2>
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{totalConsoles} platforms</span>
                    </div>
                    <ResponsiveContainer width="100%" height={280}>
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="45%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                                {pieData.map((_: any, index: number) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ background: "#1f2937", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "12px", color: "#fff" }} />
                            <Legend
                                formatter={(value) => (
                                    <span style={{ color: "#9ca3af", fontSize: 11 }}>
                                        {value.replace("Nintendo ", "N. ").replace("PlayStation ", "PS").replace(" Model", "")}
                                    </span>
                                )}
                                iconSize={10}
                                wrapperStyle={{ paddingTop: "8px" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* RECENTLY ADDED */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-bold text-lg">Recently Added</h2>
                    <Link href="/games" className="text-indigo-400 text-sm flex items-center gap-1 hover:text-indigo-300 transition-colors">
                        View all <ArrowUpRight size={14} />
                    </Link>
                </div>
                <div className="space-y-3">
                    {recentGames.map((game: any, index: number) => (
                        <div key={game.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 text-sm font-mono w-5">{index + 1}</span>
                                <img
                                    src={game.cover === "no-cover.jpeg" ? "/imgs/no-cover.jpeg" : `/uploads/${game.cover}`}
                                    alt={game.title}
                                    className="w-10 h-12 object-cover rounded-lg shadow-md"
                                    onError={(e) => { (e.target as HTMLImageElement).src = "/imgs/no-cover.jpeg"; }}
                                />
                                <div>
                                    <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">{game.title}</p>
                                    <p className="text-gray-500 text-sm">{game.console.name}</p>
                                </div>
                            </div>
                            <span className="text-emerald-400 font-bold">${game.price}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}