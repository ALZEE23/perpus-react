export default function tentang(){
    return (
      <>
        <section className="flex px-20 w-full max-h-full space-x-8">
          <div className="border-2 border-black w-2/3 p-4 rounded-lg">
            <h1 className="text-3xl">Edit Identitas Aplikasi</h1>
            <hr className="border border-black my-3" />
            <form action="" className="px-10">
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-lg bg-white absolute px-3"
                >
                  Nama Aplikasi
                </label>
                <input
                  type="text"
                  className="border w-full px-2 h-16 my-4 rounded-xl text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-lg bg-white absolute px-3"
                >
                  Alamat Lengkap
                </label>
                <textarea
                  type="text"
                  className="border w-full px-2 py-3 h-32 my-4 rounded-xl text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-lg bg-white absolute px-3"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border w-full px-2 h-16 my-4 rounded-xl text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-lg bg-white absolute px-3"
                >
                  Nomor Telepon 
                </label>
                <input
                  type="text"
                  className="border w-full px-2 h-16 my-4 rounded-xl text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                  <button className="w-full h-12 bg-blue-500 text-white text-xl rounded-xl">Kirim</button>
                </div>
            </form>
          </div>
          <div className="border w-1/3"></div>
        </section>
      </>
    );
}