'use client'
import React from 'react'
import { motion } from "framer-motion"

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

            {/* Glow 1 */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-purple-400 rounded-full blur-[150px] opacity-30"
                animate={{
                    x: [0, 250, -180, 100, -50, 0],
                    y: [0, -200, 150, -100, 80, 0],
                    rotate: [0, 15, -10, 20, -5, 0],
                    scale: [1, 1.1, 0.9, 1.05, 1, 1],
                }}
                transition={{
                    duration: 10, // más rápido
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Glow 2 */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-cyan-300 rounded-full blur-[120px] opacity-30"
                animate={{
                    x: [200, -180, 120, -100, 80, 200],
                    y: [-100, 180, -80, 120, -60, -100],
                    rotate: [0, -10, 8, -15, 5, 0],
                    scale: [1, 1.05, 0.95, 1.1, 1, 1],
                }}
                transition={{
                    duration: 12, // ligeramente más lento para contraste
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Otros glows */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full blur-[100px] opacity-20"
                animate={{
                    x: [200, -180, 120, -100, 80, 200],
                    y: [-100, 180, -80, 120, -60, -100],
                    rotate: [0, -10, 8, -15, 5, 0],
                    scale: [1, 1.05, 0.95, 1.1, 1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute right-[-100px] top-1/2 w-[550px] h-[550px] bg-indigo-500 rounded-full blur-[130px] opacity-35"
                animate={{
                    x: [200, -180, 120, -100, 80, 200],
                    y: [-100, 180, -80, 120, -60, -100],
                    rotate: [0, -10, 8, -15, 5, 0],
                    scale: [1, 1.05, 0.95, 1.1, 1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

        </div>
    )
}

export default Background
