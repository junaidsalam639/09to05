import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { useTheme } from "../theme/ThemeProvider"

const categories = ["Shawarma", "Grilled Meat", "Grilled Chicken"]

const menuItems = [
  {
    id: 1,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/assets/images/menu/menu-one.png",
    category: "Shawarma",
  },
  {
    id: 2,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/assets/images/menu/menu-two.png",
    category: "Shawarma",
  },
  {
    id: 3,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/assets/images/menu/menu-three.png",
    category: "Grilled Meat",
  },
  {
    id: 4,
    title: "Your Heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    price: 14.0,
    image: "/assets/images/menu/menu-four.png",
    category: "Grilled Chicken",
  },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { theme } = useTheme();

  return (
    <section id="menu" className="relative py-20 bg-red-500 dark:bg-[#252322] text-white">
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="relative block w-[283%] h-[177px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill={theme === "dark" ? "#252322" : "#FFFFFF"}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-light mb-2">View Our</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Menu</h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm sm:text-base transition-colors ${activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-black text-white/90 hover:bg-black/25"
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
              className="flex flex-col sm:flex-row items-start gap-4 relative z-20"
            >
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 overflow-hidden rounded">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                <p className="text-white/70 text-sm mb-4 max-w-xs">{item.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                  <Button
                    size="sm"
                    className="bg-black hover:bg-black/80 text-white rounded-sm px-3 py-1 h-10 flex items-center gap-1 text-xs"
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
          src="/assets/images/menu/menu-bottom-left.png"
          alt="Grilled meat"
          width={400}
          height={400}
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
          src="/assets/images/story-right-two.png"
          alt="Food wrap"
          width={300}
          height={300}
          className="object-cover"
        />
      </motion.div>
    </section>
  )
}
