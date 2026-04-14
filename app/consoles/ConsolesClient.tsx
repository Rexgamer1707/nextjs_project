"use client";
import { useState } from "react";
import { consoleSchema } from "@/component/lib/schemas"; // Importar el esquema
import { createConsoleAction, updateConsoleAction } from "@/app/actions";
import Swal from "sweetalert2";

export default function ConsolesClient({ initialConsoles }: { initialConsoles: any[] }) {
    const [formData, setFormData] = useState({ name: "", manufacturer: "", description: "" });
    const [editingConsole, setEditingConsole] = useState<any>(null);
    const [errors, setErrors] = useState<any>({});

    // FUNCIÓN DE VALIDACIÓN CON ZOD
    const validate = () => {
        const result = consoleSchema.safeParse(formData);

        if (!result.success) {
            // Mapeamos los errores para mostrarlos en los inputs
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors(fieldErrors);

            // Alerta visual rápida
            Swal.fire({
                title: "Error de validación",
                text: "Por favor revisa los campos marcados en rojo",
                icon: "error",
                background: "#111827",
                color: "#fff"
            });
            return false;
        }

        setErrors({}); // Limpiar errores si todo está bien
        return true;
    };

    const handleAction = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Validar con Zod antes de hacer nada
        if (!validate()) return;

        const data = new FormData(e.currentTarget as HTMLFormElement);

        // 2. Llamar a la acción
        const res = editingConsole
            ? await updateConsoleAction(editingConsole.id, data)
            : await createConsoleAction(data);

        if (res.success) {
            Swal.fire({ title: "¡Éxito!", icon: "success", background: "#111827", color: "#fff" });
            // Lógica para cerrar modal y resetear form aquí
        }
    };

    return (
        <form onSubmit={handleAction} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Nombre</label>
                <input
                    name="name"
                    type="text"
                    className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name[0]}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium">Fabricante</label>
                <input
                    name="manufacturer"
                    type="text"
                    className={`input input-bordered w-full ${errors.manufacturer ? 'border-red-500' : ''}`}
                    value={formData.manufacturer}
                    onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                />
                {errors.manufacturer && <p className="text-red-500 text-xs mt-1">{errors.manufacturer[0]}</p>}
            </div>

            {/* Repetir para los demás campos... */}

            <button type="submit" className="btn btn-primary w-full">
                {editingConsole ? "Actualizar" : "Crear"} Consola
            </button>
        </form>
    );
}