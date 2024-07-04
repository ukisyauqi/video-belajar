import Navbar from "../components/ui/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[1240px] mx-auto w-full px-5 pb-10 mt-8">
        <h3 className="center font-semibold">404 - Halaman tidak ditemukan</h3>
        <p className="mt-4 center">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      </div>
    </div>
  )
}
