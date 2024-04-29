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
import UpdateCraft from './Components/UpdateCraft.jsx';
import NotFoundPage from './Components/NotFoundPage.jsx';
import ViewDetailsPage from './Components/ViewDetailsPage.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<NotFoundPage></NotFoundPage>,
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
        element:<ProtectedRoute><MyArtCraftList></MyArtCraftList></ProtectedRoute>
      },
      {
        path:'/addCraftItem',
        element:<ProtectedRoute><AddCraftPage></AddCraftPage></ProtectedRoute>
      },
      {
        path:'/updateCraft/:id',
        element:<ProtectedRoute><UpdateCraft></UpdateCraft></ProtectedRoute>,
        loader:({params})=>fetch(`http://localhost:5000/crafts/${params.email}/${params.id}`)
      },
      {
        path:'/viewDetails/:id',
        element:<ProtectedRoute><ViewDetailsPage></ViewDetailsPage></ProtectedRoute>,
        loader:({params})=>fetch(`http://localhost:5000/crafts/${params.id}`)
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
