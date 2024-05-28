import React, { useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import "tailwindcss/tailwind.css";
import EditPeminjamanModal from "./EditPeminjamanModal";

export default function TablePeminjaman({ data, onEdit, onDelete }) {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedPeminjaman, setSelectedPeminjaman] = useState(null);

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: (row, i) => i + 1,
      },
      {
        Header: "Id Peminjaman",
        accessor: "id",
      },
      {
        Header: "Buku",
        accessor: "id_buku.judul",
      },
      {
        Header: "Peminjam",
        accessor: "id_anggota.name",
      },
      {
        Header: "Tgl Pinjam",
        accessor: "tgl_pinjam",
      },
      {
        Header: "Tgl Kembali",
        accessor: "tgl_kembali",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Denda",
        accessor: "denda",
      },
      {
        Header: "Aksi",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => handleEdit(row.original.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (id) => {
    const peminjaman = data.find((item) => item.id === id);
    setSelectedPeminjaman(peminjaman);
    setEditModalIsOpen(true);
  };

  const handleSaveEdit = (updatedPeminjaman) => {
    onEdit(updatedPeminjaman);
    setEditModalIsOpen(false);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="p-7 mx-10 rounded-lg border-2 border-black">
      <div className="flex justify-between">
        <h1 className="text-2xl">List Data Peminjaman</h1>
        <div>
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search"
            className="mb-4 p-2 border rounded w-full"
          />
        </div>
      </div>
      <hr className="border-black mb-10" />
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              key={headerGroup.id}
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-200"
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-2 px-4 border"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                className="even:bg-gray-100"
              >
                {row.cells.map((cell) => (
                  <td
                    key={cell.column.id}
                    {...cell.getCellProps()}
                    className="py-2 px-4 border"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center py-2">
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-2"
          >
            {"<"}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-2"
          >
            {">"}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="px-2"
          >
            {">>"}
          </button>
        </div>
        <div>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <div>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-12 p-1 border rounded"
          />
        </div>
        <div>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="p-1 border rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      <EditPeminjamanModal
        isOpen={editModalIsOpen}
        onRequestClose={() => setEditModalIsOpen(false)}
        peminjaman={selectedPeminjaman}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
