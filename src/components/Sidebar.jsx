import React from "react";
import { NavLink } from "react-router-dom";

// image imports
import { IoPricetagOutline } from "react-icons/io5";
import { CiFolderOn, CiHome } from "react-icons/ci";

const Sidebar = () => {
    return (
        <aside className="container max-w-63 mx-auto p-4 bg-[#f5f6fa]   border-r border-[#d7dbeb]">
            <div>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        ` flex items-center gap-4 px-4 py-3 rounded-md ${isActive ? "bg-[#1E5EFF] text-white" : ""}`
                    }
                >
                    <CiHome size={25} />
                    <span>Dashboard</span>
                </NavLink>
                <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                        ` flex items-center gap-4 px-4 py-3 rounded-md ${isActive ? "bg-[#1E5EFF] text-white" : ""}`
                    }
                >
                    <IoPricetagOutline size={25} />
                    <span>Products</span>
                </NavLink>
                <NavLink
                    to={"/categories"}
                    className={({ isActive }) =>
                        ` flex items-center gap-4 px-4 py-3 rounded-md ${isActive ? "bg-[#1E5EFF] text-white" : ""}`
                    }
                >
                    <CiFolderOn size={25} />
                    <span>Categories</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
