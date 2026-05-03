'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface NavLink {
    label: string
    href: string
}

const navLinks: NavLink[] = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skilss' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Scroll optimizado
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Bloquear scroll body
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={clsx(
                    'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
                    isScrolled ? 'top-4' : 'top-6'
                )}
            >
                <div
                    className={clsx(
                        'rounded-2xl px-6 py-2 flex items-center gap-6 border transition-all duration-300',
                        isScrolled
                            ? 'bg-black/40 backdrop-blur-md border-white/10 shadow-xl'
                            : 'bg-black/20 backdrop-blur-sm border-white/20'
                    )}
                >
                    {/* LOGO */}
                    <Link href="#" className="group">
                        <div className='flex items-center justify-center'>
                            <Image src="/icono.png" alt="" width={65} height={65} />
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex gap-1">
                        {navLinks.map((link) => (
                            <NavItem key={link.href} {...link} />
                        ))}
                    </div>


                    {/* CTA */}
                    <div className="hidden md:flex gap-2 ml-auto">
                        <Button variant="ghost">Contacto</Button>
                        <Button variant="primary">Ver Proyectos</Button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10"
                    >
                        <Hamburger open={isOpen} />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="fixed inset-0 z-40 pt-24">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative mx-4 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 space-y-4 animate-in fade-in slide-in-from-top-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="h-px bg-white/10 my-4" />

                        <Button full>Contacto</Button>
                        <Button variant="primary" full>
                            Ver Proyectos
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

function NavItem({ label, href }: NavLink) {
    return (
        <Link
            href={href}
            className="relative px-4 py-2 text-sm text-white/80 hover:text-white group"
        >
            {label}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-linear-to-r from-blue-500 to-cyan-500 transition-all group-hover:w-full" />
        </Link>
    )
}

function Button({
    children,
    variant = 'ghost',
    full = false,
}: {
    children: React.ReactNode
    variant?: 'ghost' | 'primary'
    full?: boolean
}) {
    return (
        <button
            className={clsx(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                full && 'w-full',
                variant === 'primary'
                    ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    : 'text-white/80 border border-white/20 hover:border-white/40 hover:bg-white/5'
            )}
        >
            {children}
        </button>
    )
}

function Hamburger({ open }: { open: boolean }) {
    return (
        <div className="flex flex-col gap-1.5">
            <span
                className={clsx(
                    'w-5 h-0.5 bg-white transition',
                    open && 'rotate-45 translate-y-2'
                )}
            />
            <span
                className={clsx(
                    'w-5 h-0.5 bg-white transition',
                    open && 'opacity-0'
                )}
            />
            <span
                className={clsx(
                    'w-5 h-0.5 bg-white transition',
                    open && '-rotate-45 -translate-y-2'
                )}
            />
        </div>
    )
}