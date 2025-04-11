import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Link } from "react-router"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:dark:bg-[#252322] text-white pt-16 pb-8">
            <div className="container mx-auto md:px-28 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            Your<span className="text-red-500 dark:text-red-400">LOGO</span>Here
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#story"
                                    className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#menu"
                                    className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                >
                                    Get Started
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#menu"
                                    className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 text-red-500 dark:text-red-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Phone: +1 123 456 7890</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 text-red-500 dark:text-red-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-400">Email: info@example.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-red-500 dark:text-red-400 flex-shrink-0 mt-1" />
                                <div className="text-gray-400">
                                    <p>Head Office:</p>
                                    <p>123 Main Street,</p>
                                    <p>Anytown, AZ 85123</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum has been the industry's standard dummy text.</p>
                        <div className="flex">
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-800 border-gray-700 focus:border-red-500 rounded-r-none"
                            />
                            <Button variant="primary" className="rounded-l-none">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>Copyright © 2025 Anyanwu.com - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
