"use client";
import { SignIn as SignInIcon, UserPlus as SignUpIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

export default function HomeInfo() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/imgs/bg-home.png')] bg-cover bg-center">
            <div className="flex flex-col items-center text-center max-w-2xl p-8 bg-black/60 backdrop-blur-md rounded-3xl border border-white/10 mx-4">

                <div className="mb-6">
                    <Image
                        src="/imgs/bg-logo.jpeg"
                        alt="Game NextJS Logo"
                        width={200}
                        height={200}
                        className="rounded-xl drop-shadow-2xl"
                        priority
                    />
                </div>

                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                    <strong className="text-white">GameNext.js</strong> is a modern platform to manage and organize
                    videogames. Built with Next.js, it uses Prisma, Neon database, and
                    Stack Auth to provide secure authentication, fast performance, and scalable
                    data management.
                </p>

                {/* Contenedor de botones: uno al lado del otro */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">

                    {/* Botón SignIn - Azul Oscuro */}
                    <Link
                        href="handler/sign-in?after_auth_return_to=%2Fdashboard"
                        className="flex items-center justify-center gap-2 px-8 py-3 bg-[#3730a3] hover:bg-[#312e81] text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg min-w-[160px]"
                    >
                        <SignInIcon size={24} />
                        <span>SignIn</span>
                    </Link>

                    {/* Botón SignUp - Azul Oscuro */}
                    <Link
                        href="handler/sign-up?after_auth_return_to=%2Fdashboard"
                        className="flex items-center justify-center gap-2 px-8 py-3 bg-[#3730a3] hover:bg-[#312e81] text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg min-w-[160px]"
                    >
                        <SignUpIcon size={24} />
                        <span>SignUp</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}