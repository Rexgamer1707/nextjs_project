import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import SideBar from "@/component/SideBar";
import { getConsolesWithCountAction } from "@/app/actions";
import ConsolesClient from "./ConsolesClient";

export default async function ConsolesPage() {
    const user = await stackServerApp.getUser();

    if (!user) {
        redirect('/');
    }

    const { consoles, success } = await getConsolesWithCountAction();

    if (!success) return (
        <div className="p-10 text-center text-white">Error al cargar las consolas.</div>
    );

    return (
        <SideBar currentPath="/consoles">
            <ConsolesClient consoles={consoles ?? []} />
        </SideBar>
    );
}