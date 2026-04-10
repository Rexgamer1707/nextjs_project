import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";
import SideBar from "@/component/SideBar";
import GamesInfo from "@/component/GamesInfo";

interface PageProps {
    searchParams: Promise<{
        page?: string;
        search?: string;
        console?: string;
    }>;
}

export default async function GamesPage({ searchParams }: PageProps) {
    const user = await stackServerApp.getUser();

    // Protección de ruta
    if (!user) {
        redirect('/');
    }

    const params = await searchParams;

    // Ahora TypeScript no marcará error aquí porque ya conoce estas propiedades
    const currentPage = parseInt(params.page || "1");
    const searchQuery = params.search || "";
    const consoleId = parseInt(params.console || "0");

    return (
        <SideBar currentPath="/games">
            <GamesInfo
                currentPage={currentPage}
                searchQuery={searchQuery}
                consoleId={consoleId}
            />
        </SideBar>
    );
}