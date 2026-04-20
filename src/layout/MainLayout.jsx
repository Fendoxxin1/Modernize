import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <>
            <Header />

            <div className="flex">
                <Sidebar />
                <main className="bg-[#f5f6fa]  flex-1">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default MainLayout;
