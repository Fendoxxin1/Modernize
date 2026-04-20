import React from "react";
//image import
import dollar from "../../assets/dollarIcon.svg";
import cart from "../../assets/cartIcon.svg";
import people from "../../assets/pepleIcon.svg";
import peoples from "../../assets/peoplesicon.svg";
import hoodie from "../../assets/MenHoodie.png";
import striped from "../../assets/womanStriped.png";
import wwhite from "../../assets/WomenWhiteShirt.png";
import mwhite from "../../assets/MenWhiteShirt.png";
import wred from "../../assets/WomenRedShirt.png";

// component import
import Chart from "../../components/Chart";
import SalesChart from "../../components/SalesChart";
import Card from "../../components/ui/Card";

const Dashboard = () => {
    return (
        <div className="container px-10 pt-8">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            {/* //? cart */}
            <div className="mt-8 grid grid-cols-4 gap-0.5">
                <Card img={dollar} text1={"$10.540"} desc={"Total Revenue"} price={"22.45% ^"} color={true} />
                <Card img={cart} text1={"1,056"} desc={"Orders"} price={"15.34% ^"} color={true} />
                <Card img={people} text1={"48"} desc={"Active Sessions"} price={`218.25% ⌄`} color={false} />
                <Card img={peoples} text1={"5.420"} desc={"Total Sessions"} price={"10.24% ⌄"} color={false} />
            </div>
            {/* //? Chart */}
            <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="col-span-2">
                    <Chart />
                </div>
                <div className="col-span-1">
                    <SalesChart />
                </div>
            </div>
            {/* //? table */}
            <div className="w-full my-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-gray-900 font-bold text-lg mb-6">Top Products by Units Sold</h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="pb-4 font-semibold text-gray-600 text-sm">Name</th>
                            <th className="pb-4 font-semibold text-gray-600 text-sm text-right">Price</th>
                            <th className="pb-4 font-semibold text-gray-600 text-sm text-right">Units Sold</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        <tr>
                            <td className="py-4 flex items-center gap-4">
                                <img src={hoodie} alt="" className="w-12 h-10 rounded-lg object-cover bg-gray-100" />
                                <span className="font-medium text-gray-800">Men Grey Hoodie</span>
                            </td>
                            <td className="py-4 text-right text-gray-600">$49.90</td>
                            <td className="py-4 text-right text-gray-600">204</td>
                        </tr>
                        <tr>
                            <td className="py-4 flex items-center gap-4">
                                <img src={striped} alt="" className="w-12 h-10 rounded-lg object-cover bg-gray-100" />
                                <span className="font-medium text-gray-800">Woman Striped T-Shirt</span>
                            </td>
                            <td className="py-4 text-right text-gray-600">$34.90</td>
                            <td className="py-4 text-right text-gray-600">155</td>
                        </tr>
                        <tr>
                            <td className="py-4 flex items-center gap-4">
                                <img src={wwhite} alt="" className="w-12 h-10 rounded-lg object-cover bg-gray-100" />
                                <span className="font-medium text-gray-800">Women White T-Shirt</span>
                            </td>
                            <td className="py-4 text-right text-gray-600">$40.90</td>
                            <td className="py-4 text-right text-gray-600">120</td>
                        </tr>
                        <tr>
                            <td className="py-4 flex items-center gap-4">
                                <img src={mwhite} alt="" className="w-12 h-10 rounded-lg object-cover bg-gray-100" />
                                <span className="font-medium text-gray-800">Men White T-Shirt</span>
                            </td>
                            <td className="py-4 text-right text-gray-600">$49.90</td>
                            <td className="py-4 text-right text-gray-600">204</td>
                        </tr>
                        <tr>
                            <td className="py-4 flex items-center gap-4">
                                <img src={wred} alt="" className="w-12 h-10 rounded-lg object-cover bg-gray-100" />
                                <span className="font-medium text-gray-800">Women Red T-Shirt</span>
                            </td>
                            <td className="py-4 text-right text-gray-600">$34.90</td>
                            <td className="py-4 text-right text-gray-600">155</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
