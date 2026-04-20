import React from "react";
import { Bar } from "react-chartjs-2";
// 1. Chart.js dan kerakli modullarni olib kelamiz
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// 2. Ularni ro'yxatdan o'tkazamiz (Bu qat'iy shart!)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const SalesChart = () => {
    const data = {
        labels: ["12", "13", "14", "15", "16", "17", "18"], // Pastdagi kunlar
        datasets: [
            {
                data: [30, 50, 40, 50, 70, 90, 80], // Ustunlar balandligi
                backgroundColor: "#00D897", // Figmadagi yashil rang
                borderRadius: 20, // Ustunlar tepasini yumaloq qilish
                borderSkipped: false, // Hamma tomonini yumaloq qilish imkonini beradi
                barThickness: 8, // Ustunlar ingichkaligi (Figmadagidek)
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#2D3748", // Tooltip fon rangi (to'q rang)
                padding: 10,
                displayColors: false,
                callbacks: {
                    label: (context) => `$${context.raw}`, // Tooltipda $ belgisini chiqarish
                },
            },
        },
        scales: {
            y: {
                display: false, // Y o'qini butunlay yashirish
            },
            x: {
                grid: { display: false }, // Vertikal chiziqlarni o'chirish
                border: { display: false },
                ticks: {
                    color: "#94a3b8", // Pastdagi raqamlar rangi
                },
            },
        },
    };

    return (
        <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-900 font-bold text-lg mb-6">Last 7 Days Sales</h3>

            <div className="mb-8">
                <p className="text-2xl font-bold text-gray-900">1,259</p>
                <p className="text-gray-400 text-sm">Items Sold</p>
            </div>

            <div className="mb-10">
                <p className="text-2xl font-bold text-gray-900">$12,546</p>
                <p className="text-gray-400 text-sm">Revenue</p>
            </div>

            <hr className="mb-6 border-gray-100" />

            <div className="h-[200px]">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};
export default SalesChart;
