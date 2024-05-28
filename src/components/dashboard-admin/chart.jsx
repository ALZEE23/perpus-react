import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Dropdown from "../../components/dashboard-admin/dropdown";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli"],
    datasets: [
      {
        label: "Jumlah Pengunjung",
        data: [75, 50, 60, 80, 70, 30, 65],
        backgroundColor: "#4D9E41",
        borderColor: "#4D9E41",
        borderWidth: 1,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // legend: {
      //   position: "top",
      // },
      // title: {
      //   display: true,
      //   text: "Jumlah Pengunjung per Bulan",
      // },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 25, // Explicitly set the step size to 25
          beginAtZero: true, // Ensure the y-axis starts at zero
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="border-black mb-10 pb-5 rounded-lg border-2">
      <div className="block">
        <div className="px-7 py-5 bg-[#00237B] items-center flex">
          <h1 className="text-xl text-white">Grafik Pengunjung</h1>
        </div>
        <div className="px-10 my-4">
          <Dropdown />
        </div>
        <div className="relative h-[15rem]">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
