"use client";
import Link from "next/link";
import { PlusIcon } from "@phosphor-icons/react";

export default function AddGameButton() {
    return (
        <Link href="/games/add" className="btn btn-primary px-4 py-2 rounded-2xl flex items-center gap-2">
            <PlusIcon size={18} />
            <span className="hidden sm:inline">Add</span>
        </Link>
    );
}
