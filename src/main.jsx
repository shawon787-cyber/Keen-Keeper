import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import Homepage from './Components/Homepage/Homepage'
import DataProvider from './Components/context/DataProvider'
import FriendsDetailsData from './Components/Friend/FriendsDetailsData'
import Timeline from './Components/Timeline/Timeline'
import { ToastContainer } from 'react-toastify'

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
        element: <Timeline></Timeline>
      },
      {
        path: "friend-details/:id",
        element: <FriendsDetailsData></FriendsDetailsData>
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
        <ToastContainer position="top-right" autoClose={2000} />
    </DataProvider>
  </StrictMode>,
)
