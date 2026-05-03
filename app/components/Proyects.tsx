"use client";

import Image from "next/image";
import { JSX } from "react"
import { SiReact, SiNextdotjs, SiJavascript, SiCss, SiTypescript, SiLaravel, SiNodedotjs, SiHtml5, SiSequelize, SiFirebase, SiGooglecloudstorage, SiPhp, SiVite, SiTailwindcss, SiMysql } from "@icons-pack/react-simple-icons"

type Project = {
  title: string;
  description: string;
  images: string[]; // 👈 ahora es array
  date: string;
  tech: { icon: JSX.Element; name: string }[];
};

const projects: Project[] = [
  {
    title: "Sistema de Administracion para agencias de viajes",
    description:
      "Aplicación web para gestión de productos en agencias de viajes, tours, paquetes, blog, usuarios, roles, reservas y comentarios.",
    images: [
      "/projects/project1-1.jpg",
      "/projects/project1-2.jpg",
      "/projects/project1-3.jpg",
    ],
    date: "2025-2026",
    tech: [
      { icon: <SiHtml5 />, name: "Html5" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiTailwindcss />, name: "Tailwindcss" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiPhp />, name: "Php" },
      { icon: <SiMysql />, name: "Mysql" },
    ],
  },
  {
    title: "ERP para Colegios",
    description:
      "Sistema Web para administracion de Colegios, control de pagos, usuarios, roles, permisos y alumnos.",
    images: [
      "/projects/project1-1.jpg",
      "/projects/project1-2.jpg",
      "/projects/project1-3.jpg",
    ],
    date: "2023",
    tech: [
      { icon: <SiHtml5 />, name: "Html5" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiCss />, name: "CSS" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiSequelize />, name: "Sequelize" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiMysql />, name: "Mysql" },
    ],
  },
  {
    title: "Sistema para control de Files en Agencias de viajes",
    description:
      "Aplicación web para gestión de Files y creacion de brochures en agencias de viajes, usuarios, roles y servicios.",
    images: [
      "/projects/project1-1.jpg",
      "/projects/project1-2.jpg",
      "/projects/project1-3.jpg",
    ],
    date: "2022",
    tech: [
      { icon: <SiHtml5 />, name: "Html5" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiCss />, name: "CSS" },
      { icon: <SiPhp />, name: "Php" },
      { icon: <SiLaravel />, name: "Laravel" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiMysql />, name: "Mysql" },
    ],
  },
  {
    title: "Aplicacion Web para control de asistencia docente en colegios",
    description:
      "Aplicación web para control de asistencia docente en colegios mediante codigos QR, generacion de reportes, usuarios, roles, permisos y alumnos.",
    images: [
      "/projects/project1-1.jpg",
      "/projects/project1-2.jpg",
      "/projects/project1-3.jpg",
    ],
    date: "2022",
    tech: [
      { icon: <SiHtml5 />, name: "Html5" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiCss />, name: "CSS" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiJavascript />, name: "Javascript" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiGooglecloudstorage />, name: "Google Cloud Storage" },
      { icon: <SiNodedotjs />, name: "Node.js" },



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
                  src={project.images[0]} // 👈 imagen principal
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Indicador de múltiples imágenes */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    +{project.images.length - 1}
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col gap-3">

                {/* Título + fecha */}
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-lg">
                    {project.title}
                  </h3>
                  {/* <span className="text-xs text-white/50">
                    {project.date}
                  </span> */}
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