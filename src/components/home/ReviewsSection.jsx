import { useState, useEffect } from "react"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "JENNY",
    position: "Lorem ipsum dolor sit amet",
    rating: 5,
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    name: "MICHAEL",
    position: "Lorem ipsum dolor sit amet",
    rating: 4,
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    name: "SARAH",
    position: "Lorem ipsum dolor sit amet",
    rating: 5,
  },
]

export default function ReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-900 h-full relative overflow-hidden">
          <img src="/assets/images/img-left-review.jpg" alt="Food wrap" className="object-cover h-full w-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
        >
          <div className="max-w-md">
            <h2 className="text-3xl font-light mb-2">Client</h2>
            <h3 className="text-5xl font-bold text-red-500 mb-8">Reviews</h3>

            <div className="relative h-64">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentReviewIndex ? 1 : 0,
                    x: index === currentReviewIndex ? 0 : 30,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute top-0 left-0 w-full ${
                    index === currentReviewIndex ? "" : "pointer-events-none"
                  }`}
                >
                  <Quote className="w-12 h-12 text-red-500 mb-4" />
                  <p className="text-gray-600 mb-6">{review.text}</p>
                  <div>
                    <h4 className="text-xl font-bold text-red-500">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.position}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${i < review.rating ? "bg-red-500" : "bg-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex mt-8">
              {reviews.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full mr-2 ${index === currentReviewIndex ? "bg-red-500" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
