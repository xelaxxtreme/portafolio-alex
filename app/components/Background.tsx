'use client'
import React from 'react'
import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

            {/* Glow 1 */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-30"
                animate={{
                    x: [0, 200, -100, 0],
                    y: [0, -150, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Glow 2 */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-cyan-400 rounded-full blur-[120px] opacity-30"
                animate={{
                    x: [200, -150, 100, 200],
                    y: [-100, 150, -50, -100],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Glow 3 */}
            <motion.div
                className="absolute w-[300px] h-[300px] bg-pink-500 rounded-full blur-[100px] opacity-20"
                animate={{
                    x: [-100, 100, -50, -100],
                    y: [100, -100, 50, 100],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute right-[-100px] top-1/2 w-[350px] h-[350px] bg-indigo-400 rounded-full blur-[130px] opacity-25"
                animate={{
                    x: [0, -80, 40, 0],
                    y: [-50, 50, -30, -50],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Noise overlay (clave para que no se vea plano) */}
            <div className="absolute inset-0 bg-[url('/fondo.svg')] opacity-50 mix-blend-overlay" />
        </div>
    )
}

export default Background