"use client";

import { useState } from "react";
import { EditorRoot, EditorContent } from "novel";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const isValid = content.replace(/<[^>]+>/g, "").trim().length > 20;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid) return;

        setLoading(true);

        // Simulación de envío
        await new Promise((res) => setTimeout(res, 1200));

        setLoading(false);
        setSuccess(true);
    };

    return (
        <section className="w-full flex justify-center px-4 py-20">
            <div className="max-w-2xl w-full">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">
                        Contacto
                    </h2>
                    <p className="text-white/50 mt-2 text-sm">
                        Cuéntame sobre tu proyecto, idea o problema
                    </p>
                    <div className="mt-4 mx-auto h-[2px] w-12 bg-cyan-400/60 rounded-full" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400 transition"
                        required
                    />

                    {/* Editor */}
                    <div className="rounded-xl border border-white/10 bg-white/5 focus-within:border-cyan-400 transition">

                        {/* Toolbar minimal */}
                        <div className="flex gap-2 px-3 pt-3">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.execCommand("bold");
                                }}
                                className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white/70"
                            >
                                B
                            </button>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.execCommand("italic");
                                }}
                                className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white/70"
                            >
                                I
                            </button>
                        </div>

                        <EditorRoot>
                            <EditorContent
                                className="min-h-[140px] p-4 text-white outline-none"


                                onUpdate={({ editor }) => {
                                    setContent(editor.getHTML());
                                }}
                            />
                        </EditorRoot>
                    </div>

                    {/* Feedback */}
                    {!isValid && content.length > 0 && (
                        <p className="text-red-400 text-sm">
                            El mensaje debe tener al menos 20 caracteres
                        </p>
                    )}

                    {success && (
                        <p className="text-green-400 text-sm">
                            Mensaje enviado correctamente 🚀
                        </p>
                    )}

                    {/* Botón */}
                    <button
                        type="submit"
                        disabled={!isValid || loading}
                        className={`px-6 py-3 rounded-xl font-medium transition
              ${loading
                                ? "bg-cyan-700 cursor-not-allowed"
                                : "bg-cyan-500 hover:bg-cyan-600"
                            } text-white`}
                    >
                        {loading ? "Enviando..." : "Enviar mensaje"}
                    </button>
                </form>

                {/* Nota técnica (esto vende) */}
                <p className="text-center text-white/40 text-xs mt-6">
                    Este formulario utiliza un editor de texto personalizado basado en Novel.
                </p>

            </div>
        </section>
    );
}