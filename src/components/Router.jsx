import { Suspense,lazy } from "react";
import { Route,Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

const Index = lazy(() => import("../pages/index"))
const Login = lazy(() => import("../pages/loginPage"))
const DashboardAdmin = lazy(() => import("../pages/admin/index") )
const DashboardUser = lazy(() => import("../pages/user/index") )

export default function Router(){
    return(
        <Suspense fallback={<div className="text-6xl">loading</div>}>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard-admin"
                element={
                    <AdminRoutes>
                        <DashboardAdmin/>   
                    </AdminRoutes>
                }/>
                <Route path="/dashboard"
                element={
                    <PrivateRoutes>
                        <DashboardUser/>   
                    </PrivateRoutes>
                }/>
            </Routes>
        </Suspense>
    )
}