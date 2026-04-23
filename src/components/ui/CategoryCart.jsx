import React, { useState } from "react";

const CategoryCart = ({ img, title, stock }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="bg-white  rounded-[6px] h-87 relative">
            <div onMouseEnter={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} className="bg-[#333752B2]">
                <img
                    className={`h-62.5 ${isHover ? "opacity-50 transition-opacity duration-250" : ""}`}
                    src={img}
                    alt="categimg"
                    width={350}
                    height={250}
                />
            </div>
            <h3 className="pl-7 font-bold text-[16px] mt-5">{title}</h3>
            <span className="pl-7 text-[#5A607F]  ">{stock} items</span>

            {isHover && (
                <span
                    onMouseEnter={() => setIsHover(true)}
                    className="flex text-[#1E5EFF] gap-1 py-2 bg-white absolute pr-6 pl-4 top-25 left-30 cursor-pointer"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19 19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H19ZM18.003 3.58492L19.4151 4.99703C20.195 5.77692 20.195 7.04137 19.4151 7.82126L11.1778 16.0586C11.025 16.2114 10.8268 16.3105 10.6129 16.341L6 17L6.65899 12.3871C6.68954 12.1732 6.78864 11.975 6.94141 11.8222L15.1787 3.58492C15.9586 2.80503 17.2231 2.80503 18.003 3.58492ZM16.5909 4.99703L8.58911 12.9988L8.35399 14.646L10.0012 14.4109L18.003 6.40914L16.5909 4.99703Z"
                            fill="#1E5EFF"
                        />
                    </svg>
                    Edit
                </span>
            )}
        </div>
    );
};

export default CategoryCart;
