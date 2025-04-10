import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"

const categories = ["Shawarma", "Grilled Meat", "Grilled Chicken"]

const menuItems = [
  {
    id: 1,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/placeholder.svg?height=150&width=150",
    category: "Shawarma",
  },
  {
    id: 2,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/placeholder.svg?height=150&width=150",
    category: "Shawarma",
  },
  {
    id: 3,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/placeholder.svg?height=150&width=150",
    category: "Grilled Meat",
  },
  {
    id: 4,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/placeholder.svg?height=150&width=150",
    category: "Grilled Chicken",
  },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <section id="menu" className="py-20 bg-red-500 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-2">View Our</h2>
          <h3 className="text-6xl font-bold mb-6">Menu</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 transition-colors ${
                  activeCategory === category ? "bg-black/30 text-white" : "bg-black/20 text-white/90 hover:bg-black/25"
                } ${index === 0 ? "rounded-l-sm" : ""} ${index === categories.length - 1 ? "rounded-r-sm" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-white/30 z-10 hidden md:block"></div>
          <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-white/30 z-10 hidden md:block"></div>

          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 relative z-20"
            >
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-full border-2 border-white/30 shadow-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-white/70 text-sm mb-4 max-w-xs">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price.toFixed(2)}</span>
                  <Button
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white rounded-sm px-3 py-1 h-8 flex items-center gap-1 text-xs"
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Add To Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute -bottom-10 left-0 hidden lg:block z-10"
      >
        <img
          src="/placeholder.svg?height=250&width=250"
          alt="Grilled meat"
          width={250}
          height={250}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute -bottom-5 right-0 hidden lg:block z-10"
      >
        <img
          src="/placeholder.svg?height=200&width=200"
          alt="Food wrap"
          width={200}
          height={200}
          className="object-cover"
        />
      </motion.div>
    </section>
  )
}
