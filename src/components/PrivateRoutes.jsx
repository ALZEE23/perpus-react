import { Navigate } from "react-router-dom"
import Cookies from "js-cookie";

export default function PrivateRoutes({ children }){
    const token = Cookies.get("token");

    if(!token){
        return <Navigate to="/login" replace/>
    }

    return children;
}