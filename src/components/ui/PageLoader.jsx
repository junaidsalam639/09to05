import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"



export default function PageLoader({ duration = 2500 }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-[150vw] h-[150vw] bg-red-500 rounded-full absolute"
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            className="relative w-32 h-32 mb-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                        >
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <motion.path
                                    d="M50 10 C20 10 10 30 10 50 C10 70 20 90 50 90 C80 90 90 70 90 50 C90 30 80 10 50 10"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="5 5"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.7 }}
                                />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="30"
                                    fill="white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="20"
                                    fill="red"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                />
                            </svg>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-2">Sean Anyanwu</h2>
                            <div className="flex justify-center space-x-2 text-white">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.3, duration: 0.3 }}
                                >
                                    Loading
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ delay: 1.4, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.1 }}
                                >
                                    .
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ delay: 1.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.1 }}
                                >
                                    .
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ delay: 1.6, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.1 }}
                                >
                                    .
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
