import TablePengunjung from "./tablePengunjung"

export default function dataPengunjung(){
    const data = [
    {
        no: 1,
        nama: "al",
        kelas: "12",
        jenisKelamin: "Laki",
        tanggal: "12",
        kegiatan: "login",
        aksi:"",
    }
    ];
    return(
        <>
            <section className="w-full overflow-y-scroll">
                <TablePengunjung data={data}/>
            </section>
        </>
    )
}