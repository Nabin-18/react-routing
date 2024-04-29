import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './component/About/About.jsx'
import Home from './component/Home/Home.jsx'
import User from './component/User/User.jsx'
import Contact from './component/Contact/Contact.jsx'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Github from './component/GIthub/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//        },
//       {
//         path:"about",
//         element:<About />
//        },
//         {
//         path:"contact",
//         element:<Contact />
//        },
//     ]

//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>
   {/* parents  */}
   <Route path='' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/user/:userid' element={<User/>} />
   <Route path='github' element={<Github />} />
   
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  
  </React.StrictMode>,
)
