import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/home'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Restaurant from '@/pages/restaurant'
import Review from '@/pages/review'
import Team from '@/pages/team'
import AIAssistant from '@/pages/ai-assistant'
import ErrorPage from '@/pages/error'
import RestaurantDetails from '@/pages/restaurant/details'

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
                path: 'restaurant/:id',
                element: <RestaurantDetails />,
            },
            {
                path: 'review',
                element: <Review />,
            },
            {
                path: 'team',
                element: <Team />,
            },
            {
                path: 'ai-assistant',
                element: <AIAssistant />,
            },
        ],
    },
])

export default router
