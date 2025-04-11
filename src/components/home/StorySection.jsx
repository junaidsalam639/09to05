import { motion } from "framer-motion"
import { Button } from "../ui/Button"

export default function StorySection() {
    return (
        <section id="story" className="relative py-20 px-4 md:px-0">
            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto md:col-span-2"
                    >
                        <div className="overflow-hidden rounded-full border-4 border-white shadow-xl w-40 h-40 md:w-52 md:h-52">
                            <img
                                src="/assets/images/story-right.png"
                                alt="Food wrap"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right md:col-span-4"
                    >
                        <h2 className="text-2xl sm:text-3xl font-light mb-2">View Our</h2>
                        <h3 className="text-4xl sm:text-6xl font-bold text-red-500 mb-6">Story</h3>
                        <p className="dark:text-white text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
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
                        className="mx-auto md:col-span-4"
                    >
                        <div className="overflow-hidden rounded-full border-4 border-white shadow-xl w-52 h-52 md:w-96 md:h-96">
                            <img
                                src="/assets/images/story-left.png"
                                alt="Grilled meat and chicken"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-32 right-0 hidden lg:block z-50"
            >
                <img
                    src="/assets/images/story-right-two.png"
                    alt="Roasted chicken"
                    width={300}
                    height={300}
                    className="object-cover"
                />
            </motion.div>
        </section>
    )
}
