import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log('Subscribing email:', email)
        setEmail('')
        // You can add your newsletter subscription logic here
    }

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Our Team', href: '/team' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press', href: '/press' },
        ],
        support: [
            { name: 'Help Center', href: '/help' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Community Guidelines', href: '/guidelines' },
            { name: 'Safety', href: '/safety' },
        ],
        legal: [
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Cookie Policy', href: '/cookies' },
            { name: 'Accessibility', href: '/accessibility' },
        ],
    }

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ]

    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Y</span>
                            </div>
                            <h2 className="text-xl font-bold text-teal-400">YetiAlos</h2>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            The most trusted platform for authentic restaurant reviews and food discoveries.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-200"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-slate-800 mt-12 pt-8">
                    <div className="max-w-md">
                        <div className="flex items-center space-x-2 mb-4">
                            <Mail className="h-5 w-5 text-teal-400" />
                            <h3 className="text-lg font-semibold">Stay Updated</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Get the latest restaurant recommendations and food trends delivered to your inbox.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex space-x-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-700 px-6"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 YetiAlos All rights reserved. Made with{' '}
                        <span className="text-red-500">♥</span>{' '}
                        for food lovers everywhere.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
