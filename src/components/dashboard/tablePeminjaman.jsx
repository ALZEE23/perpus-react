import { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import "tailwindcss/tailwind.css";

export default function TablePeminjaman({ data, onEdit, onDelete }) {
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
              onClick={() => onEdit(row.original.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded"
              onClick={() => onDelete(row.original.id)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete]
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
    </div>
  );
}

// Contoh penggunaan komponen TablePeminjaman
// const data = [
//   {
//     id: 1,
//     id_buku: { judul: "Daun yang Jatuh Tak Pernah Membenci Angin" },
//     id_anggota: { name: "John Doe" },
//     tgl_pinjam: "2023-01-01",
//     tgl_kembali: "2023-01-10",
//     status: "Dikembalikan",
//     denda: 0,
//   },
//   {
//     id: 2,
//     id_buku: { judul: "Kamus Inggris - Indonesia" },
//     id_anggota: { name: "Jane Smith" },
//     tgl_pinjam: "2023-01-05",
//     tgl_kembali: "2023-01-15",
//     status: "Dikembalikan",
//     denda: 5000,
//   },
//   // Add more rows as needed
// ];

// const onEdit = (id) => {
//   // Handle edit action for the book with the given id
//   console.log(`Editing book with id ${id}`);
// };

// const onDelete = (id) => {
//   // Handle delete action for the book with the given id
//   console.log(`Deleting book with id ${id}`);
// };

// <TablePeminjaman data={data} onEdit={onEdit} onDelete={onDelete} />;
