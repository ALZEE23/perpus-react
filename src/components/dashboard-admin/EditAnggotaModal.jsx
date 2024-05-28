import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EditAnggotaModal = ({ isOpen, onRequestClose, anggota, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    kelas: "",
    jenis_kelamin: "",
    email: "",
    alamat: "",
    password: "", // Tambahkan field password
  });

  useEffect(() => {
    if (anggota) {
      setFormData({ ...anggota, password: "" }); // Set password kosong untuk edit
    }
  }, [anggota]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Anggota"
      className="modal w-screen h-screen absolute top-0 left-0 bg-slate-200 transition-transform"
      overlayClassName="modal-overlay"
    >
      <div className="absolute top-32 left-1/4 right-1/4 bg-white h-[30rem] rounded-lg border border-black px-10 py-5">
        <h2 className="text-xl mb-4">Edit Anggota</h2>
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
              type="text"
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
              placeholder="Kosongkan jika tidak ingin diubah"
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

export default EditAnggotaModal;
