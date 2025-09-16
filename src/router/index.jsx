import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/home'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Restaurant from '@/pages/restaurant'
import Review from '@/pages/review'
import Team from '@/pages/team'
import ErrorPage from '@/pages/error'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'restaurant',
                element: <Restaurant />,
            },
            {
                path: 'review',
                element: <Review />,
            },
            {
                path: 'team',
                element: <Team />,
            },
        ],
    },
])

export default router
