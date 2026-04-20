import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { RiCheckboxBlankFill } from "react-icons/ri";

// 1. Chart.js modullarini ro'yxatdan o'tkazamiz
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const OrdersChart = () => {
    // 2. Grafik ma'lumotlari (Data)

    const data = {
        labels: ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm"],
        datasets: [
            {
                label: "May 22 (Bugun)",
                data: [10, 15, 10, 25, 34, 30, 34, 50, 45, 25, 25, 34],
                borderColor: "#3b82f6", // Ko'k chiziq
                backgroundColor: "transparent",
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: "#3b82f6",
            },
            {
                label: "May 21 (Kecha)",
                data: [20, 10, 15, 12, 25, 20, 40, 30, 35, 45, 30, 40], // Kechagi ma'lumotlar
                borderColor: "#e2e8f0", // Kulrang chiziq (Figmadagidek)
                backgroundColor: "transparent",
                tension: 0.4,
                pointRadius: 0, // Kechagi kunda nuqtalar ko'rinmasligi uchun 0 qildik
                // borderDash: [5, 5], // Agar chiziqni uzuq-uzuq (dotted) qilmoqchi bo'lsangiz
            },
        ],
    };

    // 3. Grafik sozlamalari (Options)
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Konteyner o'lchamiga moslashish uchun
        plugins: {
            legend: {
                display: false, // Tepada "Orders" yozuvini yashirish
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    drawBorder: false,
                },
            },
            x: {
                grid: {
                    display: false, // Vertikal chiziqlarni o'chirish (tozaroq chiqadi)
                },
                borderDash: [5, 5],
            },
        },
    };

    return (
        <div className="w-full h-[300px] bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between">
                <h2 className="text-lg font-bold mb-4">Orders Over Time</h2>

                <select className="text-[#5A607F]">
                    <option>Last 12 hour</option>
                </select>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-10 text-[#5A607F]">
                    <div>
                        <span className="font-bold text-2xl text-[#131523]">645</span>
                        <p>Orders on May 22</p>
                    </div>
                    <div>
                        <span className="font-bold text-2xl text-[#131523]">472</span>
                        <p>Orders on May 21</p>
                    </div>
                </div>
                <div className="text-[#5A607F] flex items-center gap-2">
                    <RiCheckboxBlankFill className="text-[#D9E1EC] inline rounded-2xl" />
                    <span>May21</span>

                    <RiCheckboxBlankFill className="text-[#1E5EFF] inline rounded-2xl ml-5" />
                    <span>May22</span>
                </div>
            </div>

            <Line data={data} options={options} />
        </div>
    );
};

export default OrdersChart;
