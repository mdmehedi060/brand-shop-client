import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Components/Main';
import AddProduct from './Pages/AddProduct/AddProduct.jsx';
import MyCart from './Pages/MyCart/MyCart.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register';
import AuthProvider from './Components/Providers/AuthProviders.jsx';
import Privateroute from './Components/Routes/PrivateRouts';
import Details from './Pages/Home/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/details/:id",
        element: <Privateroute><Details></Details></Privateroute>,
        loader: () => fetch("/category.json"),
      
      },
      
      {
        path: "/addproduct",
        element: <Privateroute><AddProduct></AddProduct></Privateroute>,
      },
      {
        path:"/mycart",
        element:<Privateroute><MyCart></MyCart></Privateroute>
      },
      
      {
        path: "/login",
        element:<Login></Login> 
      },
     
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
