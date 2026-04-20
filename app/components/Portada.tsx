'use client'
import React, { useState } from "react"
/* import { SiTypescript, SiNextdotjs, SiPhp } from "react-icons/si" */
import { SiReact, SiTypescript, SiNextdotjs, SiPhp, SiJavascript, SiHtml5, SiKotlin } from "@icons-pack/react-simple-icons"

const Portada = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <section className='relative flex flex-col items-center text-white pb-40 px-4 overflow-hidden'>





            {/* 🎯 HERO */}
            <div className="flex flex-col items-center mt-24 text-center max-w-3xl">

                <span className="text-xs px-3 py-1 rounded-full border border-white/20 mb-6">
                    FULLSTACK DEVELOPER
                </span>

                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    Construyo soluciones reales con{" "}
                    <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        código y estrategia
                    </span>
                </h1>

                <p className="text-white/70 mt-4 max-w-lg">
                    Desarrollo aplicaciones modernas enfocadas en rendimiento,
                    escalabilidad y experiencia de usuario.
                </p>

                {/* 🔥 BOTONES */}
                <div className='flex gap-4 mt-8 flex-wrap justify-center'>
                    <button className='px-6 py-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:opacity-90 transition'>
                        Ver proyectos
                    </button>
                    <button className='px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition'>
                        Contactar
                    </button>
                </div>

                {/* ⚡ STACK (Simple Icons) */}
                <div className="flex gap-6 mt-12 text-2xl text-white/70">
                    <SiReact className="hover:text-cyan-400 transition" />
                    <SiTypescript className="hover:text-blue-500 transition" />
                    <SiNextdotjs className="hover:text-white transition" />
                    <SiPhp className="hover:text-indigo-400 transition" />
                    <SiJavascript className="hover:text-yellow-500 transition" />
                    <SiHtml5 className="hover:text-orange-500 transition" />
                    <SiKotlin className="hover:text-purple-500 transition" />
                </div>
            </div>
        </section>
    )
}

export default Portada