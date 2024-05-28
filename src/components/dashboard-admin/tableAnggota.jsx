import React, { useState, useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import AddAnggotaModal from "./addAnggotaModal"; // Import modal tambah anggota
import "tailwindcss/tailwind.css";

export default function TableAnggota({ data, onEdit, onDelete, onAdd }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State untuk modal tambah anggota

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: (row, i) => i + 1,
      },
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Kelas",
        accessor: "kelas",
      },
      {
        Header: "Jenis Kelamin",
        accessor: "jenis_kelamin",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Alamat",
        accessor: "alamat",
      },
      {
        Header: "Aksi",
        accessor: "id", // Use id for editing/deleting
        Cell: ({ cell: { value } }) => (
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() =>
                onEdit(data.find((anggota) => anggota.id === value))
              }
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded"
              onClick={() => onDelete(value)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [data, onEdit, onDelete]
  );

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl ">List Data Anggota</h1>
        <div className="flex space-x-4 items-center">
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search"
            className="mb-4 p-2 border rounded w-full self-center"
          />
          <button
            className="bg-[#127E01] px-3 py-2 w-72 text-white rounded-lg"
            onClick={() => setIsAddModalOpen(true)}
          >
            Tambah Anggota
          </button>
          <button className="bg-[#A4019D] px-3 py-2 w-72 text-white rounded-lg">
            Import File
          </button>
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
            className="border rounded w-16 text-center"
          />
        </div>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="border rounded"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <AddAnggotaModal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        onSave={onAdd}
      />
    </div>
  );
}
