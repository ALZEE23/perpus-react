import React, { useState,useEffect } from "react";
import Modal from "react-modal";
import { postBuku } from "../../api/api"; // Ganti dengan path yang sesuai
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const AddBookModal = ({ isOpen, onRequestClose, onBookAdded }) => {
  const [formData, setFormData] = useState({
    isbn: "",
    judul: "",
    penulis: "",
    penerbit: "",
    tahun: "",
    jumlah_buku: "",
    kategori: "",
    id_pustakawan: "",
  });

   useEffect(() => {
     const userId = localStorage.getItem("userId");
     if (userId) {
       setFormData((prevFormData) => ({
         ...prevFormData,
         id_pustakawan: userId,
       }));
     }
   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postBuku(formData);
      toast.success("Buku berhasil ditambahkan!");
    //   onBookAdded(response); // Update state or UI after successful addition
        
      onRequestClose();
      return response;
    } catch (error) {
      console.error("Error saat menambahkan buku:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Tambah Buku"
      className="modal w-screen h-screen absolute top-0 left-0 bg-slate-200 transition-transform"
      overlayClassName="modal-overlay"
    >
      <div className="absolute top-32 left-1/4 right-1/4 bg-white h-[28rem] rounded-lg border border-black px-10 py-5">
        <h2 className="text-xl mb-4">Tambah Buku</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 grid-rows-4 space-x-6 px-10"
        >
          <div className="mb-4">
            <label className="block mb-2">ISBN</label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Judul Buku</label>
            <input
              type="text"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Penulis</label>
            <input
              type="text"
              name="penulis"
              value={formData.penulis}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Penerbit</label>
            <input
              type="text"
              name="penerbit"
              value={formData.penerbit}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tahun</label>
            <input
              type="text"
              name="tahun"
              value={formData.tahun}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Jumlah</label>
            <input
              type="number"
              name="jumlah_buku"
              value={formData.jumlah_buku}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Kategori</label>
            <input
              type="text"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* <div className="mb-4 hidden">
            <label className="block mb-2">Kategori</label>
            <input
              type="text"
              name="id_pustakawan"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div> */}
          <div className="flex space-x-2 items-center">
            <button
              type="button"
              onClick={onRequestClose}
              className="bg-gray-500 text-white py-1 px-3 rounded h-1/2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-3 rounded h-1/2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddBookModal;
