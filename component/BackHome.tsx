"use client";
import { ArrowCircleLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function BackHomeButton() {
    return(
        <div>
            <Link href="/" className="btn btn-outline mt-10 w-full hover:text-white">
                <ArrowCircleLeftIcon size={32} />  
                Back to Home          
            </Link>
        </div>
    );
}