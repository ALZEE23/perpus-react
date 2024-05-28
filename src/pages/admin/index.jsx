import Sidebar from "../../components/dashboard-admin/sidebar";
import { useState } from "react";
import Dashboard from "../../components/dashboard-admin/dashboard";
import DataBuku from "../../components/dashboard-admin/dataBuku";
import DataPengunjung from "../../components/dashboard-admin/dataPengunjung";
import DataAnggota from "../../components/dashboard-admin/dataAnggota";
import DataPeminjaman from "../../components/dashboard-admin/dataPeminjaman";
import Denda from "../../components/dashboard-admin/denda";
import Tentang from "../../components/dashboard-admin/tentang";
import Cookies from "js-cookie";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/api";

export default function index() {
  const [activePage, setActivePage] = useState("dashboard");
  const [title, setTitle] = useState("Dashboard");

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch(error) {
      console.error("error", error)
    }
  }

  useEffect(() => {
    const role = localStorage.getItem("role");
    const token = Cookies.get("token");
    if (!token || role == "user") {
      navigate("/login");
    }
  }, [navigate]);


  const renderComponent = () => {
    switch (activePage) {
      case "dashboard":
        // setTitle("Dashboard");
        return <Dashboard />;
      case "dataBuku":
        return <DataBuku/>;
      case "dataPengunjung":
        return <DataPengunjung/>;
      case "dataAnggota":
        return <DataAnggota/>;
      case "dataPeminjaman":
        return <DataPeminjaman/>;
      case "dataPengembalian":
        return ;
      case "denda":
        return <Denda />;
      case "tentang":
        return <Tentang/>;
    }
  };

  return (
    <>
      <div className="flex">
        <ToastContainer />
        <Sidebar onSelect={(page) => setActivePage(page)} />
        <div className="w-5/6 h-screen">
          <div className="px-20 py-16 flex h-12 justify-between">
            <h1 className="text-5xl self-center">{title}</h1>
            <div className="flex items-center space-x-4">
              <button
                className="text-lg bg-red-400 py-2 px-5 rounded-lg text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {renderComponent()}
        </div>
      </div>
    </>
  );
}
