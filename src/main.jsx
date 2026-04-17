import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './Routers/Router';
import FriendTimeLineProvider from './Context/FriendTimeLineProvider';
import { ToastContainer } from 'react-toastify';




// const router =createBrowserRouter([
//   {
//     path:'/',
//     Component:MainLayout
//   }

// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FriendTimeLineProvider>
     <RouterProvider router={router}></RouterProvider>
   </FriendTimeLineProvider>
   <ToastContainer />
  
  </StrictMode>,
)
