
import { motion } from "framer-motion"
import { Button } from "../ui/Button"

export default function StorySection() {
    return (
        <section id="story" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,300 Q300,100 600,300 Q900,500 1200,300"
                        stroke="#E0E0E0"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-3 lg:col-span-2"
                    >
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 w-full h-full rounded-full border-2 border-red-500 z-0"></div>
                            <div className="relative z-10 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                <img
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="Food wrap"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-6 lg:col-span-5 text-center md:text-left px-4 md:px-8 mt-8 md:mt-0"
                    >
                        <h2 className="text-3xl font-light mb-2">View Our</h2>
                        <h3 className="text-6xl font-bold text-red-500 mb-6">Story</h3>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.
                        </p>
                        <Button variant="primary" size="rounded">
                            Read More
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-3 lg:col-span-5 mt-8 md:mt-0"
                    >
                        <div className="relative">
                            <div className="absolute -right-2 -top-2 w-full h-full rounded-full border-2 border-dashed border-red-500/50 z-0"></div>
                            <div className="relative z-10 overflow-hidden rounded-full border-4 border-white shadow-xl">
                                <img
                                    src="/placeholder.svg?height=300&width=300"
                                    alt="Grilled meat and chicken"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-20 right-0 hidden lg:block z-20"
            >
                <img
                    src="/placeholder.svg?height=150&width=150"
                    alt="Roasted chicken"
                    width={150}
                    height={150}
                    className="object-cover"
                />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-red-500 z-0">
                <svg
                    className="absolute -top-16 left-0 right-0 w-full h-16 text-red-500"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 22L60 16.7C120 11 240 1 360 0C480 0 600 11 720 16.7C840 22 960 22 1080 16.7C1200 11 1320 0 1380 -5.3L1440 -11V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"></path>
                </svg>
            </div>
        </section>
    )
}
