import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

const GuestLayout = () => {
    return (
        <>
        <AppHeader/>
        <Outlet/>
        </>
    );
};

export default GuestLayout;