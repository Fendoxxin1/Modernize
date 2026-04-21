import React from "react";
import mensCateg from "../../assets/mensCateg.jpg";

const CategoryCart = ({ img, title, stock }) => {
    return (
        <div className="bg-white  rounded-[6px] h-87">
            <img src={img} alt="categimg" width={350} height={250} />
            <h3 className="pl-7 font-bold text-[16px] mt-5">{title}</h3>
            <span className="pl-7 text-[#5A607F]  ">{stock} items</span>
        </div>
    );
};

export default CategoryCart;
