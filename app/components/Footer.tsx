'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  SiGithub,
  SiGmail,
} from "@icons-pack/react-simple-icons";
import {
    SiReact,
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiJavascript,
    SiHtml5,
    SiKotlin,
    SiFiles,
    SiGooglemaps,
    SiWhatsapp
} from "@icons-pack/react-simple-icons"


export default function Footer() {
  return (
    <footer className="relative mt-32 px-4">
      <div className="relative overflow-hidden max-w-7xl mx-auto rounded-t-[40px] border border-white/10 bg-[#0B0B0C]">

        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-cyan-500/20 blur-[140px] pointer-events-none" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-16">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">

            {/* LEFT */}
            <div className="max-w-md">
              <Image
                src="/icono.png"
                alt="Logo"
                width={90}
                height={90}
                className="mb-6"
              />

              <h2 className="text-3xl font-bold text-white leading-tight">
                Construyendo experiencias digitales modernas.
              </h2>

             

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-8">
                <a 
                            href="mailto:my.wab.alex@gmail.com?subject=Hola&body=Me gustaría hablar contigo sobre..."
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                            >
                            <SiGmail />
                        </a>

                        <button 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/AlexDelaCruzCV.pdf';
                                link.download = 'AlexDelaCruzCV.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                            >
                            <SiFiles />
                        </button>

                        <a
                            href="https://github.com/xelaxxtreme/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                        >
                            <SiGithub />
                        </a>

                        <a
                            href="https://wa.me/51927406750?text=Hola,%20me%20gustaría%20hablar%20contigo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition"
                            >
                            <SiWhatsapp/>
                        </a>

                {/*<SocialLink href="#">
                  <SiGithub size={18} />
                </SocialLink>

                <SocialLink href="#">
                    <p className="text-sm font-bold px-1 py-0 border border-solid rounded-sm">in</p>
                </SocialLink>

                <SocialLink href="#">
                  <SiGmail size={18} />
                </SocialLink>
*/}
              </div>
            </div>

            {/* RIGHT */}
            {/*<div className="grid grid-cols-2 gap-12 text-sm">

              <div>
                <h3 className="text-white font-semibold mb-5">
                  Navegación
                </h3>

                <ul className="space-y-3 text-neutral-400">
                  <li><Link href="#home">Inicio</Link></li>
                  <li><Link href="#projects">Proyectos</Link></li>
                  <li><Link href="#about">Sobre mí</Link></li>
                  <li><Link href="#contact">Contacto</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-5">
                  Stack
                </h3>

                <ul className="space-y-3 text-neutral-400">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>Node.js</li>
                </ul>
              </div>

            </div>*/}
          </div>

          {/* BOTTOM */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-neutral-200">
              © 2026 Alex Delacruz Quispe
            </p>

            <p className="text-sm text-neutral-200">
              Diseñado con café y bugs ☕
            </p>

          </div>

          {/* HUGE TEXT */}
          <div className="relative mt-20">

            <h2 className="
              text-center
              font-black
              uppercase
              tracking-tight
              text-transparent
              text-[clamp(4rem,15vw,14rem)]
              leading-none
              bg-clip-text
              bg-linear-to-b
              from-white/60
              to-white/0
            ">
              AlexDEV
            </h2>

          </div>

        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        w-10 h-10
        rounded-xl
        border border-white/10
        bg-white/5
        flex items-center justify-center
        text-white
        hover:text-white
        hover:border-cyan-400/40
        hover:bg-cyan-400/10
        transition-all duration-300
      "
    >
      {children}
    </a>
  )
}