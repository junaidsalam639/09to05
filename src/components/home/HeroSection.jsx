import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/Button"

const heroImages = [
    "/assets/images/home-hero-slide.png",
    "/assets/images/home-hero-slide.png",
    "/assets/images/home-hero-slide.png",
]

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const containerRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
            }, 500)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className="relative min-h-[110vh] w-full bg-center bg-no-repeat bg-cover px-4 md:px-8 pt-16 pb-10"
            style={{ backgroundImage: "url(/assets/images/bg-banner.png)" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
                <div className="relative w-full flex justify-center" ref={containerRef}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-md md:max-w-lg"
                        >
                            <img
                                src={heroImages[currentImageIndex]}
                                alt="Food item"
                                className="object-contain w-full p-4 sm:p-8"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center md:text-left text-white"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Welcome To</h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-6">Sean Anyanwu</h2>
                    <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="hidden sm:block" />
                        tempor incididunt ut labore et dolore
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-2">Order Now</Button>
                        <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-2">Go To Our Menu</Button>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-3xl mx-auto mt-12 px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 ">
                    <div className="flex items-center gap-4">
                        <div className="bg-transparent p-2">
                            <img src="/assets/images/car.png" alt="Delivery" className="object-contain" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Delivery Service</h3>
                            <p className="text-sm text-gray-300">Available 24/7</p>
                        </div>
                    </div>
                    <div className="bg-red-500 text-white px-6 py-4 text-center rounded-lg shadow-lg">
                        <span className="text-3xl font-bold block">20%</span>
                        <span className="text-sm font-semibold">OFF</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
