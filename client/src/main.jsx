import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error, message comes from main.jsx</h1>,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/basketball',
        element: <Basketball />
      }, {
        path: '/football',
        element: <Football />
      }, {
        path: '/hockey',
        element: <Hockey />
      }, {
        path: '/baseball',
        element: <Baseball />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)