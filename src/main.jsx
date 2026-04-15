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
import Stats from './Components/Stats/Stats'
import Error from './Components/Error/Error'

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
        element: <Stats></Stats>
      }
    ],
    errorElement: <Error></Error>
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
