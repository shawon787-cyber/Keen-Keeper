import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Homepage from './Components/Homepage/Homepage'
import DataProvider from './Components/context/DataProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: <h2>Timeline</h2>
      },
      {
        path: "/stats",
        element: <h2>Stats</h2>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
        <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
