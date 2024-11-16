import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "./Components/Roots";
import Home from "./Components/Home";
import Add_Coffee from "./Components/Add_Coffee";
import Details from "./Components/Details";
import Update from "./Components/Update";
import Registration from "./Components/Registration";
import Login from "./Components/login";
import PrivetRoute from "./Components/PrivetRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>,
      children:[
         {
            path:'/',
            element:<Home></Home>,
         },
         {
            path:'/add_coffee',
            element: <PrivetRoute>  <Add_Coffee></Add_Coffee> </PrivetRoute>
         }
         ,
         {
            path:'/register',
            element :<Registration></Registration> 
         }
         ,
         {
            path:'/login',
            element:<Login></Login>
         }
         ,
         {
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)

         }
         ,
         {
            path:'/update/:id',
            element:<PrivetRoute>  <Update></Update> </PrivetRoute>,
            loader:({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
         }
      ]
    },
  ]);


  export default router;