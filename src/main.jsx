import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './MainLayout/Root.jsx'
import Home from './Pages/Home.jsx'
import AllArtCraft from './Pages/AllArtCraft.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import ProtectedRoute from './Routes/ProtectedRoute.jsx';
import MyArtCraftList from './Pages/MyArtCraftList.jsx';
import AddCraftPage from './Pages/AddCraftPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allArtCraft',
        element:<AllArtCraft></AllArtCraft>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/my-art-and-craft',
        element:<ProtectedRoute><MyArtCraftList></MyArtCraftList></ProtectedRoute>,
        loader: ()=>fetch('http://localhost:5000/crafts')
      },
      {
        path:'/addCraftItem',
        element:<ProtectedRoute><AddCraftPage></AddCraftPage></ProtectedRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
