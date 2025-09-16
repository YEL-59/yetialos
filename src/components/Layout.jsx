import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Footer } from '@/shared'

const Layout = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <main className="flex-1">
                {isHomePage ? (
                    // Full-width content for home page
                    <Outlet />
                ) : (
                    // Contained content for other pages
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <Outlet />
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout
