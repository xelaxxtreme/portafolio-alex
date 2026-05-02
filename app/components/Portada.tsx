'use client'
import React from "react"
import Image from "next/image"
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiJavascript,
    SiHtml5,
    SiKotlin,
    SiGithub,
    SiFiles,
    SiGooglemaps,
    SiGmail
} from "@icons-pack/react-simple-icons"


const Portada = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-white px-6 pt-32 overflow-hidden">

            {/* 🔥 Fondo PRO */}


            <div className="max-w-7xl text-center flex flex-col items-center">

                {/* Logo */}
                <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-linear-to-r from-green-800 to-blue-800 blur-2xl opacity-30 rounded-full" />
                    <Image src="/icono.png" alt="logo" width={350} height={350} className="relative" />
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                    Alex{" "}
                    <span className="bg-linear-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                        De la cruz Quispe
                    </span>
                </h1>

                {/* Descripción */}
                <div className="mt-10 max-w-5xl">
                    <p className="text-white/90 text-xl leading-relaxed font-light">
                        Soy <span className="font-bold text-white">Desarrollador de Software</span> desde 2020,
                        con experiencia en entornos freelance y empresariales.
                    </p>

                    <p className="text-white/70 mt-4 text-lg leading-relaxed">
                        Me especializo en adaptarme rápidamente a nuevos proyectos, seleccionando
                        tecnologías y frameworks adecuados para <span className="text-white font-bold">construir soluciones
                            eficientes, escalables </span>
                        y alineadas a los objetivos del cliente.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6 text-white mt-10">

                    {/* Ubicación */}
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                        <SiGooglemaps className="text-lg" />
                        <span>Cusco - Perú 🇵🇪</span>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-wrap justify-center gap-3">

                        <button className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition">
                            <SiGmail />
                            Contáctame
                        </button>

                        <button className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition">
                            <SiFiles />
                            Curriculum
                        </button>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                        >
                            <SiGithub />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                        >
                            <p className="text-lg font-bold px-1 py-0 border border-solid rounded-xs">in</p>
                            <p>LinkedIn</p>
                        </a>

                    </div>
                </div>


                {/* <div className="flex gap-4 mt-10 flex-wrap justify-center">
                    <button className="px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
                        Ver proyectos
                    </button>
                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition backdrop-blur">
                        Contactar
                    </button>
                </div>

                
                <div className="flex flex-wrap justify-center gap-4 mt-14">
                    {[
                        { Icon: SiReact, color: "hover:text-cyan-400" },
                        { Icon: SiTypescript, color: "hover:text-blue-500" },
                        { Icon: SiNextdotjs, color: "hover:text-white" },
                        { Icon: SiPhp, color: "hover:text-indigo-400" },
                        { Icon: SiJavascript, color: "hover:text-yellow-400" },
                        { Icon: SiHtml5, color: "hover:text-orange-500" },
                        { Icon: SiKotlin, color: "hover:text-purple-500" },
                    ].map(({ Icon, color }, i) => (
                        <div
                            key={i}
                            className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:scale-110 transition"
                        >
                            <Icon className={`text-xl text-white/70 ${color}`} />
                        </div>
                    ))}
                </div> */}

            </div>
        </section>
    )
}

export default Portada