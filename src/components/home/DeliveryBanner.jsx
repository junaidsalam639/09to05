import { Truck } from "lucide-react"
import { motion } from "framer-motion"

export default function DeliveryBanner() {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-black text-white py-4 px-6 flex justify-center md:justify-between items-center relative z-20 max-w-5xl mx-auto -mb-8 shadow-lg"
        >
            <div className="flex items-center">
                <Truck className="w-8 h-8 mr-3" />
                <div>
                    <h3 className="text-xl font-semibold">Delivery Service</h3>
                    <p className="text-sm text-gray-300">Available 24/7</p>
                </div>
            </div>
            <div className="hidden md:block bg-red-500 text-white p-4 text-center">
                <span className="text-3xl font-bold">20</span>
                <span className="text-lg font-bold">%OFF</span>
            </div>
        </motion.div>
    )
}
