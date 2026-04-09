"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-primary w-full" disabled={pending}>
            {pending ? "Creating..." : "Create Game"}
        </button>
    );
}