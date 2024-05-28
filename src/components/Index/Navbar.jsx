import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
      <>
        <nav className="md:px-20 md:py-6 items-center flex justify-between md:w-full md:h-24">
          <div className="w-28">
            <img src={logo} alt="" className="absolute top-5" />
          </div>
          <div className="grid grid-cols-4 my-auto">
            <a
              href="#home"
              className="text-lg font-semibold mx-auto hover:text-[#9A5028] hover:font-semibold"
            >
              Beranda
            </a>
            <a
              href="#about"
              className="text-lg mx-auto font-semibold hover:text-[#9A5028]"
            >
              Tentang Kami
            </a>
            <a
              href="#galeri"
              className="text-lg mx-auto font-semibold hover:text-[#9A5028]"
            >
              Galeri
            </a>
            <a href="#kontak" className="text-lg font-semibold hover:text-[#9A5028]">
              Kontak
            </a>
          </div>
          <div className="#">
            <button className="text-lg text-[#0FA958] border-2 rounded-lg px-3 py-1 font-semibold my-auto border-[#0FA958] hover:bg-[#0FA958] hover:text-white ">
              <Link to="/login">Masuk</Link>
            </button>
          </div>
        </nav>
      </>
    );
}