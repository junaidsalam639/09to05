import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import DeliveryBanner from "./DeliveryBanner"

const heroImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
]

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative bg-black text-white dark:bg-gray-900 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-red-500 dark:bg-red-600 rounded-bl-[50%] z-0" />
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[300px] md:h-[350px] w-full">
                            {heroImages.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                    style={{
                                        clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
                                    }}
                                >
                                    <img
                                        src={src || "/placeholder.svg"}
                                        alt="Food item"
                                        className="object-cover object-center"
                                        style={{
                                            borderRadius: "0 0 0 0",
                                            border: "2px dashed rgba(255,255,255,0.3)",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-full h-full border-b-2 border-r-2 border-dashed border-white/30 z-[-1]" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2">Welcome To</h1>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 dark:text-red-400 mb-6">
                            Sean Anyanwu
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button variant="primary" size="rounded">
                                Order Now
                            </Button>
                            <Button variant="primaryOutline" size="rounded">
                                Go to My Menu
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <DeliveryBanner />
        </section>
    )
}
