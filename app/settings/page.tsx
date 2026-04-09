import React from "react";
import { redirect } from "next/navigation";
import { AccountSettings } from "@stackframe/stack";
import { GearIcon } from "@phosphor-icons/react/dist/ssr";
import SideBar from "@/component/SideBar";
import { stackServerApp } from "@/stack/server";

export default async function SettingsPage() {
    const user = await stackServerApp.getUser();

    if (!user) {
        redirect("/");
    }

    return (
        <SideBar currentPath="/settings">
            <div className="space-y-8 bg-base-200 p-4 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
                            <GearIcon size={30} weight="duotone" className="text-cyan-300" />
                            Settings
                        </h1>
                        <p className="mt-2 text-sm text-white/70">
                            Administra la configuracion de tu cuenta y tus preferencias.
                        </p>
                    </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-base-100/70 p-4 shadow-xl backdrop-blur md:p-6">
                    <AccountSettings />
                </div>
            </div>
        </SideBar>
    );
}