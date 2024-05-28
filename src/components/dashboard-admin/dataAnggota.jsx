import React, { useEffect, useState } from "react";
import EditAnggotaModal from "./EditAnggotaModal";
import {
  fetchAnggota,
  deleteAnggota,
  postAnggota,
  updateAnggota,
} from "../../api/api"; // Ganti dengan path yang sesuai untuk file api.js Anda
import TableAnggota from "./tableAnggota";

export default function dataAnggota() {
    const [anggota, setAnggota] = useState([]);
    const [selectedAnggota, setSelectedAnggota] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      const getAnggota = async () => {
        const data = await fetchAnggota();
        setAnggota(data);
      };
      getAnggota();
    }, []);

    const handleDelete = async (anggotaId) => {
      await deleteAnggota(anggotaId);
      setAnggota(anggota.filter((anggota) => anggota.id !== anggotaId));
    };

    const handleEdit = (anggota) => {
      setSelectedAnggota(anggota);
      setIsModalOpen(true);
    };

    const handleSave = async (updatedAnggota) => {
      if (selectedAnggota) {
        await updateAnggota(selectedAnggota.id, updatedAnggota);
        setAnggota(
          anggota.map((anggota) =>
            anggota.id === selectedAnggota.id ? updatedAnggota : anggota
          )
        );
      } else {
        const newAnggota = await postAnggota(updatedAnggota);
        setAnggota([...anggota, newAnggota]);
      }
      setIsModalOpen(false);
      setSelectedAnggota(null);
    };
  return (
    <>
      <section className="h-full w-full overflow-y-scroll">
        <TableAnggota
          data={anggota}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <EditAnggotaModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          anggota={selectedAnggota}
          onSave={handleSave}
        />
      </section>
    </>
  );
}
