"use client";

import Image from "next/image";
import { JSX } from "react"
import { SiReact, SiNextdotjs, SiNodedotjs, SiFirebase } from "@icons-pack/react-simple-icons"

type Project = {
  title: string;
  description: string;
  image: string;
  date: string;
  tech: { icon: JSX.Element; name: string }[];
};

const projects: Project[] = [
  {
    title: "Sistema de Gestión",
    description:
      "Aplicación web para gestión de usuarios y tareas con autenticación y dashboard interactivo.",
    image: "/projects/project1.jpg",
    date: "2024",
    tech: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
  },
  {
    title: "App Mobile Delivery",
    description:
      "Aplicación móvil para pedidos en tiempo real con integración de APIs y notificaciones.",
    image: "/projects/project2.jpg",
    date: "2023",
    tech: [
      { icon: <SiReact />, name: "React Native" },
      { icon: <SiFirebase />, name: "Firestore" },
    ],
  },
  {
    title: "Landing Profesional",
    description:
      "Landing page optimizada para conversión con diseño moderno y alto rendimiento.",
    image: "/projects/project3.jpg",
    date: "2022",
    tech: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiReact />, name: "React" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="w-full flex justify-center px-4 py-16">
      <div className="max-w-6xl w-full">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center tracking-tight">
          Proyectos
        </h2>

        <div className="mt-4 mx-auto h-[2px] w-16 bg-cyan-400/60 rounded-full" />

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >

              {/* Imagen */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col gap-3">

                {/* Título + fecha */}
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-lg">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/50">
                    {project.date}
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex gap-3 mt-2 text-white/70 text-lg">
                  {project.tech.map((t, i) => (
                    <span key={i} title={t.name} className="hover:text-cyan-300 transition">
                      {t.icon}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}