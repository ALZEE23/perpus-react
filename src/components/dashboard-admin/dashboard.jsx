import React, { useState } from "react";
import book from "../../assets/bxs_book.svg";
import next from "../../assets/emojione-monotone_up-arrow.svg";
import img1 from "../../assets/nimbus_forbidden.svg"
import img2 from "../../assets/fa6-solid_list-ul.svg"
import img3 from "../../assets/mdi_people.svg"
import img4 from "../../assets/bxs_book (1).svg"
import img5 from "../../assets/mingcute_user-add-fill.svg"

import Chart from "../dashboard-admin/chart";
import "tailwindcss/tailwind.css";

export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-scroll">
      <section className="block py-5 space-y-10">
        <div className="grid grid-cols-3 grid-rows-2 px-16 gap-3">
          {/* Repeated blocks */}

          <div className="bg-[#D396A2] h-32 rounded-xl overflow-hidden scale-90">
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
          <div className="bg-[#D3D196] h-32 rounded-xl overflow-hidden scale-90">
            <div className="flex h-4/5">
              <div className="my-3 mx-5">
                <h1 className="text-white">Jumlah Buku Fiksi</h1>
                <h2 className="text-4xl text-white">43</h2>
              </div>
              <div className="my-3 mx-auto">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="w-full bg-[#C0BE8A] flex">
              <div className="mx-auto flex space-x-1 items-center">
                <h1 className="text-white">lihat</h1>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#AECC9C] h-32 rounded-xl overflow-hidden scale-90">
            <div className="flex h-4/5">
              <div className="my-3 mx-5">
                <h1 className="text-white">Jumlah Buku Fiksi</h1>
                <h2 className="text-4xl text-white">43</h2>
              </div>
              <div className="my-3 mx-auto">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="w-full bg-[#9BB48C] flex">
              <div className="mx-auto flex space-x-1 items-center">
                <h1 className="text-white">lihat</h1>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#97C9D4] h-32 rounded-xl overflow-hidden scale-90">
            <div className="flex h-4/5">
              <div className="my-3 mx-5">
                <h1 className="text-white">Jumlah Buku Fiksi</h1>
                <h2 className="text-4xl text-white">43</h2>
              </div>
              <div className="my-3 mx-auto">
                <img src={img5} alt="" />
              </div>
            </div>
            <div className="w-full bg-[#87B2BC] flex">
              <div className="mx-auto flex space-x-1 items-center">
                <h1 className="text-white">lihat</h1>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#7E96BD] h-32 rounded-xl overflow-hidden scale-90">
            <div className="flex h-4/5">
              <div className="my-3 mx-5">
                <h1 className="text-white">Jumlah Buku Fiksi</h1>
                <h2 className="text-4xl text-white">43</h2>
              </div>
              <div className="my-3 mx-auto">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="w-full bg-[#6C80A2] flex">
              <div className="mx-auto flex space-x-1 items-center">
                <h1 className="text-white">lihat</h1>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#968DC3] h-32 rounded-xl overflow-hidden scale-90">
            <div className="flex h-4/5">
              <div className="my-3 mx-5">
                <h1 className="text-white">Jumlah Buku Fiksi</h1>
                <h2 className="text-4xl text-white">43</h2>
              </div>
              <div className="my-3 mx-auto">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="w-full bg-[#7D74AC] flex">
              <div className="mx-auto flex space-x-1 items-center">
                <h1 className="text-white">lihat</h1>
                <img src={next} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full px-20 overflow-y-hidden">
        <Chart />
      </section>
    </div>
  );
}
