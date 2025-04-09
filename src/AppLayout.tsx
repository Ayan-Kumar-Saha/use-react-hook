
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
    return (
        <div className="flex h-screen w-full" >
            <Sidebar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}


export default AppLayout;