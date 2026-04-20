import React from "react";
import { Link } from "react-router-dom";

//? image import
import logo from "../assets/logo.png";
import profile from "../assets/profile-picture.svg";

//? icon import
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className="container max-w-full  shadow-2xl flex justify-between items-center px-7 py-3  ">
            <div className="logo">
                <Link to="#">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="flex items-center gap-2 flex-2 ml-28 ">
                <IoSearchOutline size={20} />

                <input
                    type="text"
                    placeholder="Search..."
                    className="border-0 focus:outline-none px-5 
                "
                />
            </div>
            <div className="flex items-center gap-3">
                <img src={profile} alt="profile picture avatar" />

                <p className="text-[#5A607F]">X'eriya Ponald</p>
            </div>
        </header>
    );
};

export default Header;
