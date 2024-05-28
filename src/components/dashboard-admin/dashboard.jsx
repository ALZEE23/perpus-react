import React, { useState } from "react";
import book from "../../assets/bxs_book.svg";
import next from "../../assets/emojione-monotone_up-arrow.svg";

import Chart from "../dashboard-admin/chart";
import "tailwindcss/tailwind.css";

export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-scroll">
      <section className="block py-5 space-y-10">
        <div className="grid grid-cols-3 grid-rows-2 px-16 gap-3">
          {/* Repeated blocks */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D396A2] h-32 rounded-xl overflow-hidden scale-90"
            >
              <div className="flex h-4/5">
                <div className="my-3 mx-5">
                  <h1 className="text-white">Jumlah Buku Nonfiksi</h1>
                  <h2 className="text-4xl text-white">68</h2>
                </div>
                <div className="my-3 mx-auto">
                  <img src={book} alt="" />
                </div>
              </div>
              <div className="w-full bg-[#C08A95] flex">
                <div className="mx-auto flex space-x-1 items-center">
                  <h1 className="text-white">lihat</h1>
                  <img src={next} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full h-full px-20 overflow-y-hidden">
        <Chart />
      </section>
    </div>
  );
}
