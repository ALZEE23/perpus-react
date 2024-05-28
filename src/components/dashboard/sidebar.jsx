import { useState } from "react";

export default function Sidebar({ onSelect }) {
  const [activePage, setActivePage] = useState("dashboard");

  const handleClick = (page) => {
    setActivePage(page);
    onSelect(page);
  };

  return (
    <div className="w-1/5 bg-slate-200 py-20 block h-screen space-y-32">
      <div className="flex">
        <h1 className="text-xl mx-auto">Administrator</h1>
      </div>

      <div className="block">
        <button
          onClick={() => handleClick("dashboard")}
          className={`px-10 flex hover:bg-slate-300 w-full h-12 items-center ${
            activePage === "dashboard" ? "bg-slate-300" : ""
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => handleClick("dataPeminjaman")}
          className={`px-10 flex hover:bg-slate-300 w-full h-12 items-center ${
            activePage === "dataPeminjaman" ? "bg-slate-300" : ""
          }`}
        >
          Data Peminjaman
        </button>
        <button
          onClick={() => handleClick("denda")}
          className={`px-10 flex hover:bg-slate-300 w-full h-12 items-center ${
            activePage === "denda" ? "bg-slate-300" : ""
          }`}
        >
          Denda
        </button>
      </div>
    </div>
  );
}
