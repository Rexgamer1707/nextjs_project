"use client"; // StackHandler suele requerir contexto de cliente

import BackHomeButton from "@/component/BackHome";
import { StackHandler } from "@stackframe/stack";

export default function SignupHandler() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/imgs/bg-sigin.jpg')] bg-cover bg-center p-4">

      {/* Contenedor principal con efecto de desenfoque y bordes suaves */}
      <div className="w-full max-w-md p-8 bg-black/70 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl">

        {/* Título opcional para dar contexto (puedes quitarlo si el StackHandler ya trae uno) */}
        <h2 className="text-2xl font-bold text-white text-center mb-6">Crear Cuenta</h2>

        {/* El componente de Stack configurado para Registro */}
        <div className="stack-auth-container">
          <StackHandler fullPage={false} />
        </div>

        {/* Botón para volver al inicio */}
        <div className="mt-6 border-t border-white/10 pt-6 text-center">
          <BackHomeButton />
        </div>

      </div>
    </div>
  );
}