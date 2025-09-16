import { Link, useLocation, Outlet } from 'react-router-dom'
import { Button } from './ui/button'
import { Home, User, Mail, Menu } from 'lucide-react'
import { useState } from 'react'

const Layout = () => {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: User },
        { name: 'Contact', href: '/contact', icon: Mail },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link to="/" className="text-2xl font-bold text-primary">
                                    YetiAlos
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {navigation.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === item.href
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                                                }`}
                                        >
                                            <Icon className="w-4 h-4 mr-2" />
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <Button variant="outline">Get Started</Button>
                        </div>
                        <div className="sm:hidden flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navigation.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === item.href
                                            ? 'border-primary text-primary bg-primary/10'
                                            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center">
                                            <Icon className="w-4 h-4 mr-2" />
                                            {item.name}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="px-4">
                                <Button variant="outline" className="w-full">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © 2024 YetiAlos. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                                About
                            </Link>
                            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
