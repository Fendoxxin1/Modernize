import React, { useEffect, useRef, useState } from "react";
import nullProd from "../../assets/nullproduct.png";
import success from "../../assets/productmodalSuccess.png";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import axios from "axios";
import { FaArrowLeftLong, FaTrashCan } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const Products = () => {
    const BaseURL = "http://localhost:3000/products";
    const [data, setData] = useState([]);
    const [addProduct, setAddProduct] = useState(false);
    const [addProdModal, setAddProdModal] = useState(false);

    const prodname = useRef();
    const desc = useRef();
    const imgUrl = useRef();
    const price = useRef();
    const discountPrice = useRef();
    const [category, setCategory] = useState();

    const [isChecked, setIsChecked] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(BaseURL);
            setData(res.data);
        }
        getData();
    }, []);

    async function handleDelete() {
        try {
            const res = await axios.delete(`${BaseURL}/${isChecked}`);

            console.log(res);
        } catch (error) {}
    }

    const toggleProduct = () => {
        setAddProduct((prev) => !prev);
    };

    const handleSave = async (e) => {
        if (e) e.preventDefault();

        const newProduct = {
            producName: prodname.current.value,
            desc: desc.current.value,
            imgURL: imgUrl.current.value,
            price: price.current.value,
            discountPrice: discountPrice.current.value,
            category: category,
        };
        try {
            const res = await axios.post("http://localhost:3000/products", newProduct);
            if (res.status == 200 || res.status == 201) {
                setAddProdModal(true);
                alert(
                    "Muvaffaqqiyatli yaratildi. Teacher aslida modal oyna chiqishi kerak edi lekin sahifa qayta refresh bo'lib ketib modal o'chib qolayabdi",
                );
            } else {
                throw new Error("Failed to post product");
            }
        } catch (err) {
            console.error(err.message);
        } finally {
        }
    };

    return (
        <div className="p-8 w-full  rounded-2xl shadow-sm border border-gray-100">
            {addProduct ? (
                <form className="">
                    <button type="button" onClick={toggleProduct} className="flex items-center gap-1 text-gray-400">
                        <FaArrowLeftLong /> <span>Back</span>
                    </button>
                    <h1 className="font-bold text-2xl text-gray-800 mb-8">Add Product</h1>

                    <div className="flex gap-6 p-6 bg-[#F8F9FB] ">
                        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="text-gray-900 font-bold text-lg mb-8">Information</h4>

                            <div className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-sm font-medium" htmlFor="prodName">
                                        Product Name
                                    </label>
                                    <input
                                        ref={prodname}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
                                        type="text"
                                        id="prodName"
                                        placeholder="Summer T-Shirt"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-sm font-medium" htmlFor="prodDesc">
                                        Product description
                                    </label>
                                    <textarea
                                        ref={desc}
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 outline-none focus:border-blue-500 transition-all placeholder:text-gray-300 resize-none"
                                        id="prodDesc"
                                        placeholder="Product description"
                                    ></textarea>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-500 text-sm font-medium" htmlFor="imgUrl">
                                        Images URL
                                    </label>
                                    <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50/50">
                                        <input
                                            ref={imgUrl}
                                            className="w-full text-center outline-none bg-transparent text-gray-400 text-sm"
                                            type="text"
                                            id="imgUrl"
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <p className="text-gray-900 font-bold text-base mb-6">Price</p>
                                    <div className="flex gap-6">
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-gray-500 text-sm font-medium" htmlFor="price">
                                                Product Price
                                            </label>
                                            <input
                                                ref={price}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
                                                type="text"
                                                id="price"
                                                placeholder="Enter price"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <label className="text-gray-500 text-sm font-medium" htmlFor="price">
                                                Discount Price
                                            </label>
                                            <input
                                                ref={discountPrice}
                                                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition-all placeholder:text-gray-300"
                                                type="text"
                                                id="price"
                                                placeholder="Price at Discount"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-80 ">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-gray-900 font-bold text-lg mb-6">Categories</h4>
                                <div className="space-y-4">
                                    {["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map((cat) => (
                                        <div key={cat} className="flex items-center gap-3">
                                            <input
                                                onChange={() => setCategory(cat)}
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                            />
                                            <span className="text-gray-600 font-medium">{cat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-54">
                                <button
                                    type="reset"
                                    className="px-8 py-2.5 rounded-lg border border-gray-200 text-blue-600 font-semibold hover:bg-gray-50 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="px-8 py-2.5 rounded-lg bg-[#1E5EFF] text-white font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="font-bold text-2xl text-gray-800 mb-8">Products</h1>
                        <button
                            onClick={toggleProduct}
                            className="bg-[#1E5EFF] text-white rounded-lg px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
                        >
                            + Add Product
                        </button>
                    </div>
                    <div className="bg-white p-8">
                        {data ? (
                            <>
                                {addProdModal && (
                                    <div
                                        onClick={() => setAddProdModal(false)}
                                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                                    >
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className="bg-white p-8 rounded-2xl shadow-xl w-[500px] relative flex flex-col items-center justify-center gap-4"
                                        >
                                            <img src={success} alt="" />
                                            <button
                                                onClick={() => setAddProdModal(false)}
                                                className="absolute top-1 right-3 p-6"
                                            >
                                                <IoMdClose />
                                            </button>
                                            <h2 className="text-xl font-bold mb-4">Add Successfull</h2>

                                            <button
                                                onClick={() => setAddProdModal(false)}
                                                className="px-4 py-2 bg-blue-700 text-white  rounded-lg mt-9"
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="overflow-x-auto">
                                    <div className="flex w-full justify-end pb-3 gap-2">
                                        <button className="border p-1 border-blue-500 text-blue-500">
                                            <MdEdit />
                                        </button>
                                        <button
                                            onClick={handleDelete}
                                            className="border p-1 border-blue-500 text-blue-500"
                                        >
                                            <FaTrashCan />
                                        </button>
                                    </div>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="pb-4 font-semibold text-gray-500 text-sm w-[40%]">
                                                    Product
                                                </th>
                                                <th className="pb-4 font-semibold text-gray-500 text-sm">Inventory</th>
                                                <th className="pb-4 font-semibold text-gray-500 text-sm">Color</th>
                                                <th className="pb-4 font-semibold text-gray-500 text-sm">Price</th>
                                                <th className="pb-4 font-semibold text-gray-500 text-sm text-right">
                                                    Rating
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {data?.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 ">
                                                    <td className="py-4 flex items-center gap-4">
                                                        <input
                                                            onChange={() => {
                                                                setIsChecked(item.id);
                                                            }}
                                                            type="checkbox"
                                                            className="w-4 h-4 "
                                                        />
                                                        <img
                                                            src={item.imgURL}
                                                            alt="clothe picture"
                                                            className="w-12 h-10 rounded-lg object-cover bg-gray-100"
                                                        />
                                                        <span className="font-medium text-gray-800">
                                                            {item.producName}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 text-gray-600 text-sm">96 in stock</td>
                                                    <td className="py-4 text-gray-600 text-sm">Black</td>
                                                    <td className="py-4 text-gray-600 text-sm">${item.price}</td>
                                                    <td className="py-4 text-right text-gray-500 text-sm">
                                                        5.0 (32 Votes)
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex items-center justify-start mt-8 gap-1">
                                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                        <HiOutlineArrowLeft size={20} />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center text-gray-600 font-medium rounded-lg hover:bg-gray-50">
                                        1
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 font-semibold rounded-lg">
                                        2
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center text-gray-600 font-medium rounded-lg hover:bg-gray-50">
                                        3
                                    </button>
                                    <span className="w-10 h-10 flex items-center justify-center text-gray-400">
                                        ...
                                    </span>
                                    <button className="w-10 h-10 flex items-center justify-center text-gray-600 font-medium rounded-lg hover:bg-gray-50">
                                        24
                                    </button>
                                    <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                                        <HiOutlineArrowRight size={20} />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="w-full flex justify-center flex-col items-center gap-6 p-50">
                                <img src={nullProd} alt="" width={99} />
                                <h3>Add Products</h3>
                                <p className="text-[#5A607F]  text-center">
                                    Start making sales by adding your products. <br /> You can import and manage your
                                    products at any time.
                                </p>
                                <button
                                    onClick={toggleProduct}
                                    className="bg-[#1E5EFF] text-white rounded-lg px-6 py-2.5 font-medium hover:bg-blue-700 transition-colors"
                                >
                                    + Add Product
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Products;
