import React, { useEffect, useState } from "react";
import { fetchBuku } from "../../api/api"; // Ganti dengan path yang sesuai untuk file api.js Anda
import TableBuku from "./tableBuku";

export default function DataBuku() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const bukuData = await fetchBuku();
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
    <section className="h-full w-full overflow-y-scroll">
      <TableBuku data={data} onEdit={onEdit} onDelete={onDelete}/>
    </section>
  );
}
