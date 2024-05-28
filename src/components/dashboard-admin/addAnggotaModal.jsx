import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { postAnggota } from "../../api/api"; // Ganti dengan path yang sesuai
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const AddAnggotaModal = ({ isOpen, onRequestClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    kelas: "",
    jenis_kelamin: "",
    email: "",
    alamat: "",
    password: "", // Tambahkan password ke formData
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
      const response = await postAnggota(formData);
      toast.success("Anggota berhasil ditambahkan!");
       // Update state or UI after successful addition
      onRequestClose();
      return response;
    } catch (error) {
      toast.error("Error saat menambahkan anggota");
      console.error("Error saat menambahkan anggota:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Tambah Anggota"
      className="modal w-screen h-screen absolute top-0 left-0 bg-slate-200 transition-transform"
      overlayClassName="modal-overlay"
    >
      <div className="absolute top-32 left-1/4 right-1/4 bg-white h-[32rem] rounded-lg border border-black px-10 py-5">
        <h2 className="text-xl mb-4">Tambah Anggota</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 grid-rows-5 space-x-6 px-10"
        >
          <div className="mb-4">
            <label className="block mb-2">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Kelas</label>
            <input
              type="text"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Jenis Kelamin</label>
            <input
              type="text"
              name="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Alamat</label>
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex space-x-2 items-center col-span-2">
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

export default AddAnggotaModal;
