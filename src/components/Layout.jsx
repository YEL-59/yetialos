import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '@/shared'

const Layout = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <Outlet />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout
