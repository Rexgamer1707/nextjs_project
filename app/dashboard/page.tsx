import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import SideBar from "@/component/SideBar";
import { getDashboardStatsAction } from "@/app/actions";
import DashboardClient from "@/component/DashboardClient";

export default async function DashboardPage() {
    const user = await stackServerApp.getUser();
    if (!user) redirect('/');

    const stats = await getDashboardStatsAction();

    return (
        <SideBar currentPath="/dashboard">
            <DashboardClient stats={stats} user={{ name: user.displayName ?? "User" }} />
        </SideBar>
    );
}