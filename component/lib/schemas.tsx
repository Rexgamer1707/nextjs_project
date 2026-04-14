import { z } from "zod";

export const gameSchema = z.object({
    title: z.string().min(3, "Title required"),
    price: z.coerce.number().positive("Invalid price"),
    console_id: z.coerce.number(),
    description: z.string().min(10, "Description too short"),
});

export const consoleSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    manufacturer: z.string().min(2, "El fabricante es obligatorio"),
    description: z.string().min(10, "La descripción es muy corta"),
    releaseDate: z.string().transform((val) => new Date(val)),
});