import TablePeminjaman from "./tablePeminjaman"
import { useEffect, useState } from "react";
import { fetchPeminjaman } from "../../api/api"; // Ganti dengan path yang sesuai untuk file api.js Anda

export default function dataPeminjaman(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const data = [
  //     {
  //         no: 1,
  //         idPeminjaman: "qwqw",
  //         buku: "alasas",
  //         peminjam: "asdas",
  //         kelas: "12",
  //         tglPinjam: "121212",
  //         tglKembali: "123123",
  //         status: "4",
  //         denda: "1212",
  //         aksi: ""
  //     }
  // ]
  useEffect(() => {
    const getData = async () => {
      try {
        const bukuData = await fetchPeminjaman();
        console.log(bukuData);
        setData(bukuData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const onEdit = (id) => {
    //   // Handle edit action for the book with the given id
    console.log(`Editing book with id ${id}`);
  };
  const onDelete = (id) => {
    //   // Handle edit action for the book with the given id
    console.log(`delete book with id ${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <section>
        <TablePeminjaman data={data} onEdit={onEdit} onDelete={onDelete} />
      </section>
    </>
  );
}