import HomeInfo from "@/component/HomeInfo";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await stackServerApp.getUser();

    if (user) {
        redirect('dashboard');
    }

    return (
      <HomeInfo />
    );
  }
