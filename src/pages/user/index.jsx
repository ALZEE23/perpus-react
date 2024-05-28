import Sidebar from "../../components/dashboard/sidebar"
import { useState } from "react"
import Dashboard from "../../components/dashboard/dashboard"
import DataPeminjaman from "../../components/dashboard/dataPeminjaman";
import Denda from "../../components/dashboard/denda"
import { logout } from "../../api/api";

export default function index(){
    const [activePage, setActivePage] = useState("dashboard");

    const renderComponent = () => {
        switch (activePage) {
            case "dashboard":
                return <Dashboard/>;
            case "dataBuku":
                return ;
            case "dataPengunjung":
                return ;
            case "dataAnggota":
                return ;
            case "dataPeminjaman":
                return <DataPeminjaman/> ;
            case "dataPengembalian":
                return ;
            case "denda":
                return <Denda/>;
            case "tentang":
                return ;
        }
    }

    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error("error", error);
      }
    };

    return (
      <>
        <div className="flex">
          <Sidebar onSelect={(page) => setActivePage(page)} />
          <div className="w-5/6 h-screen">
            <div className="px-20 py-16 flex h-12 justify-between">
              <h1 className="text-5xl self-center">Dashboard</h1>
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