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
import Updated from './Pages/Updated/Updated';
import ErrorPages from './Pages/ErrorPages/ErrorPages';
import CardDetails from './Pages/DetailsProduct/CardDetails';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
     
      {
        path: "/details/:name",
        element: <Privateroute><Details></Details></Privateroute>,
        loader:({params})=> fetch(`https://assigntment-ten-server-pa7a1zqgh.vercel.app/products/${params?.name}`),
      
      },
      
      {
        path: "/addproduct",
        element: <Privateroute><AddProduct></AddProduct></Privateroute>,
      },
      {
        path: "/detailsproduct/:id",
        element: <Privateroute><CardDetails></CardDetails></Privateroute>,
        loader:({params})=> fetch(`https://assigntment-ten-server-6ef5vsbua.vercel.app/products/${params?.id}`)
      },
      {
        path: "/update/:id",
        element: <Updated></Updated>,
        loader:({params})=> fetch(`https://assigntment-ten-server-6ef5vsbua.vercel.app/products/${params?.id}`)
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
