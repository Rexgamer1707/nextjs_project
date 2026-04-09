"use client";
import { UserButton } from "@stackframe/stack";
import Link from "next/link";
import { SquaresFourIcon, JoystickIcon, GearIcon, GameControllerIcon, ListIcon, MonitorIcon } from "@phosphor-icons/react";

export default function SideBar({ currentPath = "/dashboard",children }: { 
    currentPath: string; children: React.ReactNode }) {
    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: SquaresFourIcon },
        { name: "Games", href: "/games", icon: JoystickIcon },
        { name: "Consoles", href: "/consoles", icon: MonitorIcon },
        { name: "Settings", href: "/settings", icon: GearIcon },
    ];
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="navbar w-full bg-base-300 ">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <ListIcon size={20} />
                    </label>
                    <div className="px-4 flex gap-2 justify-center items-center">
                        <GameControllerIcon size={20} />
                        GameNextJS
                    </div>
                    <div className="ms-auto">
                        <UserButton showUserInfo={false} />
                    </div>
                </nav>
                {/* Page content here */}
                <div className="p-4">{children}</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    <div className="menu w-full grow space-y-2">
                        {navigation.map((item, key) => {
                            const IconComponent = item.icon;
                            const isActive = currentPath === item.href;
                            return (
                                <Link
                                    href={item.href}
                                    key={key}
                                    data-tip={item.name}
                                    className={`flex gap-x-2 items-center py-2 px-2 rounded-lg is-drawer-close:tooltip is-drawer-close:tooltip-right ${isActive
                                            ? "bg-purple-600 text-purple-200"
                                            : "hover:bg-white/10 text-white"
                                        }`}
                                >
                                    <IconComponent className="size-5" />
                                    <span className="text-sm is-drawer-close:hidden">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
