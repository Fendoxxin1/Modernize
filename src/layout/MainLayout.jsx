import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
