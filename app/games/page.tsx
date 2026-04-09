import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import SideBar from "@/component/SideBar";
import GamesInfo from "@/component/GamesInfo";

// Definimos los tipos para los parámetros de búsqueda
interface PageProps {
    searchParams: Promise<{ page?: string }>;
}

export default async function GamesPage({ searchParams }: PageProps) {
    const user = await stackServerApp.getUser();

    // Protección de ruta
    if (!user) {
        redirect('/');
    }

    const params = await searchParams;
    const currentPage = parseInt(params.page || "1");
    const searchQuery = params.search || "";
    const consoleId = parseInt(params.console || "0");

    return (
        <SideBar currentPath="/games">
            <GamesInfo currentPage={currentPage} searchQuery={searchQuery} consoleId={consoleId} />
        </SideBar>
    );
}