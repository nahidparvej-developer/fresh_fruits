import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../LayOut/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/signup/SignUp";
import PrivateRouts from "./PrivateRouts";
import Secret from "../Pages/Shared/Secret/Secret";
import Contact from "../Pages/Contact";




  
 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: 'home',
            element : <Home></Home>
        },
        {
          path: 'menu',
          element: <PrivateRouts><Menu></Menu></PrivateRouts>
        },
        {
          path:"order/:category",
          element: <PrivateRouts><Order></Order></PrivateRouts>
        },
        {
          path:'contact',
          element: <Contact></Contact>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'secret',
          element:<PrivateRouts>
            <Secret></Secret>
          </PrivateRouts>
        }
      ]
    },
  ]);