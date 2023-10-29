import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import BookingDetails from "../pages/BookingDetails/BookingDetails";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/services/:id",
                element:<ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:"/cart",
                element:<BookingDetails></BookingDetails>
            }
        ]
    }
])

export default routes;