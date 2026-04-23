import React, { useEffect, useRef, useState } from "react";
import CategoryCart from "../../components/ui/CategoryCart";
import nullCateg from "../../assets/nullCateg.png";

import axios from "axios";
import { IoMdClose } from "react-icons/io";

const Catogories = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const Categname = useRef();
    const CategImg = useRef();

    useEffect(() => {
        async function getData() {
            const res = await axios.get("http://localhost:3000/category");
            if (res) setData(res.data);
        }
        getData();
    }, []);

    const handleSave = () => {
        const newCategory = {
            categName: Categname.current.value,
            categoryImg: CategImg.current.value,
        };

        async function Post() {
            const res = await axios.post("http://localhost:3000/category", newCategory);

            if (res.status == 201 || res.status == 200) alert("Muvaffaqqiyatli qo'shildi!");
        }
        Post();
    };

    return (
        <div className="p-8 w-full h-fit  rounded-2xl shadow-sm border border-gray-100">
            {data.length ? (
                <div className="flex justify-between items-center mb-8">
                    <h1 className="font-bold text-2xl text-gray-800 mb-8">Categories</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1E5EFF] text-white rounded-lg px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
                    >
                        + Add Category
                    </button>
                </div>
            ) : (
                <div className="w-full flex justify-center flex-col items-center gap-6 p-50">
                    <img src={nullCateg} alt="" width={99} />
                    <h3>Create First Category</h3>
                    <p className="text-[#5A607F]  text-center">
                        Organize all your items in stock by creating and adding them to categories. <br /> Categories
                        helps to find items faster for your customers.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#1E5EFF] text-white rounded-lg px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
                    >
                        + Add Category
                    </button>
                </div>
            )}

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white p-8 rounded-2xl shadow-xl w-[500px] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Add Category</h2>
                        <button className="absolute top-1 right-3 p-6" onClick={() => setIsModalOpen(false)}>
                            <IoMdClose />
                        </button>
                        <div className="space-y-4 text-[#5A607F] font-light">
                            <label htmlFor="woman" className="">
                                Category Name
                            </label>
                            <input
                                ref={Categname}
                                id="woman"
                                type="text"
                                placeholder="Women Clothes"
                                className="w-full border-gray-400 border p-2 rounded "
                            />
                            <label htmlFor="img">Category Image url</label>
                            <input
                                ref={CategImg}
                                id="img"
                                type="text"
                                placeholder="Image url"
                                className="w-full border-gray-400 border p-2 rounded"
                            />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                            >
                                Bekor qilish
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={handleSave}>
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* //? Cart */}
            <div className="flex gap-8 flex-wrap ">
                {data.map((items) => (
                    <CategoryCart key={items.id} img={items.categoryImg} title={items.categName} stock={"24"} />
                ))}
            </div>
        </div>
    );
};

export default Catogories;
