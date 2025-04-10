import { useState } from "react"
import { Menu, ShoppingCart, Bell, X } from "lucide-react"
import { Link } from "react-router"
import { ThemeToggle } from "../theme/ThemeToggle"
import { Button } from "../ui/Button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background text-foreground py-4 px-6 md:px-12 lg:px-20 sticky top-0 z-50 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-red-500 font-bold">
            Home
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#menu" className="hover:text-red-500 transition-colors">
              Menu
            </Link>
            <Link href="#order" className="hover:text-red-500 transition-colors">
              Order
            </Link>
          </div>
        </div>

        <Link href="/" className="text-xl font-bold">
          Your<span className="text-red-500">LOGO</span>Here
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#story" className="hover:text-red-500 transition-colors">
            Story
          </Link>
          <Link href="#location" className="hover:text-red-500 transition-colors">
            Location
          </Link>
          <Link href="#contact" className="hover:text-red-500 transition-colors">
            Contact Us
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Bell className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 dark:bg-background/95 z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <Link href="/" className="text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#menu" className="text-xl" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link href="#order" className="text-xl" onClick={() => setIsMenuOpen(false)}>
              Order
            </Link>
            <Link href="#story" className="text-xl" onClick={() => setIsMenuOpen(false)}>
              Story
            </Link>
            <Link href="#location" className="text-xl" onClick={() => setIsMenuOpen(false)}>
              Location
            </Link>
            <Link href="#contact" className="text-xl" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <div className="flex items-center space-x-6 mt-6">
              <Bell className="w-6 h-6" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
