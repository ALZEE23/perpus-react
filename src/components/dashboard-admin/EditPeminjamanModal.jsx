import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EditPeminjamanModal = ({
  isOpen,
  onRequestClose,
  peminjaman,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    id_buku: { judul: "" },
    id_anggota: { name: "" },
    tgl_pinjam: "",
    tgl_kembali: "",
    status: "",
    denda: "",
  });

  useEffect(() => {
    if (peminjaman) {
      setFormData(peminjaman);
    }
  }, [peminjaman]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Peminjaman"
      className="modal w-screen h-screen absolute top-0 left-0 bg-slate-200 transition-transform"
      overlayClassName="modal-overlay"
    >
      <div className="absolute top-32 left-1/4 right-1/4 bg-white h-[28rem] rounded-lg border border-black px-10 py-5">
        <h2 className="text-xl mb-4">Edit Peminjaman</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 grid-rows-4 space-x-6 px-10"
        >
          <div className="mb-4">
            <label className="block mb-2">Judul Buku</label>
            <input
              type="text"
              name="judul"
              value={formData.id_buku.judul}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  id_buku: { judul: e.target.value },
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nama Peminjam</label>
            <input
              type="text"
              name="name"
              value={formData.id_anggota.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  id_anggota: { name: e.target.value },
                })
              }
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
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Denda</label>
            <input
              type="number"
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

export default EditPeminjamanModal;
