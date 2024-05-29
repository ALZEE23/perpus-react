import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { postPeminjaman } from "../../api/api"; // Ganti dengan path yang sesuai
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const AddPeminjamanModal = ({ isOpen, onRequestClose, onPeminjamanAdded }) => {
  const [formData, setFormData] = useState({
    id_anggota: "",
    id_buku: "",
    tgl_pinjam: "",
    tgl_kembali: "",
    status: "3",
    denda: "0"
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        id_anggota: userId,
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
      const response = await postPeminjaman(formData);
      toast.success("Peminjaman berhasil ditambahkan!");
      
      onRequestClose();
      return response;
    } catch (error) {
      console.error("Error saat menambahkan peminjaman:", error);
      toast.error("Terjadi kesalahan saat menambahkan peminjaman.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Tambah Peminjaman"
      className="modal w-screen h-screen absolute top-0 left-0 bg-slate-200 transition-transform"
      overlayClassName="modal-overlay"
    >
      <div className="absolute top-32 left-1/4 right-1/4 bg-white h-[28rem] rounded-lg border border-black px-10 py-5">
        <h2 className="text-xl mb-4">Tambah Peminjaman</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 grid-rows-4 space-x-6 px-10"
        >
          <div className="mb-4">
            <label className="block mb-2">ID Anggota</label>
            <input
              type="text"
              name="id_anggota"
              value={formData.id_anggota}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">ID Buku</label>
            <input
              type="text"
              name="id_buku"
              value={formData.id_buku}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tanggal Pinjam</label>
            <input
              type="date"
              name="tgl_pinjam"
              value={formData.tgl_pinjam}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tanggal Kembali</label>
            <input
              type="date"
              name="tgl_kembali"
              value={formData.tgl_kembali}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4 hidden">
            <label className="block mb-2">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4 hidden">
            <label className="block mb-2">Status</label>
            <input
              type="text"
              name="denda"
              value={formData.denda}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
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

export default AddPeminjamanModal;
