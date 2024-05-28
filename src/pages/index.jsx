import Navbar from "../components/Index/Navbar"
import Footer from "../components/Index/Footer"
import image from "../assets/home.svg"
import time from "../assets/Time Icon.svg"

export default function index(){
    return (
      <>
        <Navbar />
        <section id="home" className="w-full h-screen flex px-20">
          <div className="block my-32 space-y-6 w-2/3">
            <h1 className="font-bold text-5xl text-[#9A5028] tracking-wide">
              Selamat Datang di SiPerpus
            </h1>
            <h2 className="w-2/3 text-xl">
              Ayo bergabung dalam petualangan literasi bersama kami. Jelajahi
              ribuan buku dan akses pengetahuan dengan mudah!
            </h2>
            <button className="border-2 text-xl rounded-lg px-2 py-1 text-[#9A5028] border-[#9A5028] hover:bg-[#9A5028] hover:text-white">
              Lihat Selengkapnya
            </button>
          </div>
          <div className="my-10 mr-10">
            <img src={image} alt="" className="scale-110" />
          </div>
        </section>

        <section id="about" className="w-full h-screen px-20 bg-[#F3F3F3]">
          <div className="grid grid-cols-2">
            <div className="block px-2 space-y-5 my-56">
              <h1 className="text-5xl font-bold">
                Tentang kami{" "}
                <span>
                  <hr className="w-56 border-2 ml-96 -my-5 absolute border-[#9A5028]" />
                </span>
              </h1>
              <h2 className="text-xl w-2/3">
                Selamat datang di SiPerpus, sebuah inovasi terkini yang
                dirancang khusus untuk meningkatkan pengalaman belajar di
                kalangan siswa, guru, dan staf sekolah. Aplikasi ini menawarkan
                sejumlah keunggulan yang akan membawa manfaat positif bagi
                seluruh komunitas sekolah
              </h2>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 px-12 py-12 gap-y-8">
              <div className="bg-white px-5 py-10 space-y-3 rounded-2xl mx-4 shadow-2xl">
                <img src={time} alt="" />
                <h1 className="text-xl font-semibold">Akses Tanpa Batas</h1>
                <h2 className="text-sm">
                  SiPerpus memberikan akses tanpa batas ke koleksi buku. Siswa,
                  guru, dan staf dapat dengan mudah mengakses perpustakaan dari
                  mana saja dan kapan saja
                </h2>
              </div>
              <div className="bg-white px-5 py-10 space-y-3 rounded-2xl mx-4 shadow-2xl justify-between">
                <img src={time} alt="" />
                <h1 className="text-xl font-semibold">Akses Tanpa Batas</h1>
                <h2 className="text-sm">
                  SiPerpus memberikan akses tanpa batas ke koleksi buku. Siswa,
                  guru, dan staf dapat dengan mudah mengakses perpustakaan dari
                  mana saja dan kapan saja
                </h2>
              </div>
              <div className="bg-white px-5 py-10 space-y-3 rounded-2xl mx-4 shadow-2xl">
                <img src={time} alt="" />
                <h1 className="text-xl font-semibold">Akses Tanpa Batas</h1>
                <h2 className="text-sm">
                  SiPerpus memberikan akses tanpa batas ke koleksi buku. Siswa,
                  guru, dan staf dapat dengan mudah mengakses perpustakaan dari
                  mana saja dan kapan saja
                </h2>
              </div>
              <div className="bg-white px-5 py-10 space-y-3 rounded-2xl mx-4 shadow-2xl">
                <img src={time} alt="" />
                <h1 className="text-xl font-semibold">Akses Tanpa Batas</h1>
                <h2 className="text-sm">
                  SiPerpus memberikan akses tanpa batas ke koleksi buku. Siswa,
                  guru, dan staf dapat dengan mudah mengakses perpustakaan dari
                  mana saja dan kapan saja
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section id="galeri" className="w-screen h-screen px-20 py-16">
          <div className="grid gap-y-5">
            <h1 className="mx-auto text-5xl">
              <span>
                <hr className="w-40 border-2 -ml-52 my-7 absolute border-[#9A5028]" />
              </span>
              Galeri
              <span>
                <hr className="w-40 border-2 ml-44 -my-5 absolute border-[#9A5028]" />
              </span>
            </h1>
            <h2 className="mx-auto w-2/3 text-center">
              Galeri ini merupakan jendela visual ke berbagai sudut perpustakaan
              sekolah kami, memperlihatkan kekayaan sumber daya dan atmosfer
              belajar yang hangat.
            </h2>
            <div className="grid grid-cols-3 grid-rows-2 px-20 py-10 gap-y-6">
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
              <div className="bg-gray-200 w-96 h-64">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="kontak" className="w-screen h-screen px-20 py-16 my-20">
          <div className="grid gap-y-10">
            <h1 className="mx-auto text-5xl">
              <span>
                <hr className="w-40 border-2 -ml-52 my-7 absolute border-[#9A5028]" />
              </span>
              Hubungi Kami
              <span>
                <hr className="w-40 border-2 ml-[22rem] -my-5 absolute border-[#9A5028]" />
              </span>
            </h1>
            <h2 className="mx-auto w-2/3 text-center">
              Galeri ini merupakan jendela visual ke berbagai sudut perpustakaan
              sekolah kami, memperlihatkan kekayaan sumber daya dan atmosfer
              belajar yang hangat.
            </h2>
            <div className="grid grid-cols-2 px-10">
              <div className="px-12 block space-y-6">
                <div>
                  <label htmlFor="" className="mx-10 text-lg bg-white absolute px-3">Nama Lengkap</label>
                  <input
                    type="text"
                    className="border w-full px-2 h-16 my-4 rounded-xl text-xl outline-none border-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="" className="mx-10 text-lg bg-white absolute px-3">Email</label>
                  <input
                    type="text"
                    className="border w-full px-2 h-16 my-4 rounded-xl text-xl outline-none border-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="" className="mx-10 text-lg bg-white absolute px-3">Email</label>
                  <textarea
                    type="text"
                    className="border w-full px-2 py-3 h-32 my-4 rounded-xl text-xl outline-none border-gray-500"
                  />
                </div>
                <div>
                  <button className="w-full h-12 bg-blue-500 text-white text-xl rounded-xl">Kirim</button>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.489028296152!2d106.75627227499349!3d-6.585970493407638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5457e0e3bcf%3A0x58481d58737539c0!2sSMK%20Negeri%201%20Ciomas!5e0!3m2!1sid!2sid!4v1716193383591!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  className="border-2"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </>
    );
}