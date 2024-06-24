import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Products() {
  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar>
        <div className="center gap-10">
          <a href="" className="font-medium text-green-400">
            Kategori
          </a>
          <img src="/user-avatar.png" alt="user-avatar" />
        </div>
      </Navbar>

      <div className="flex-1 max-w-[1240px] mx-auto w-full py-16">
        <h3 className="font-semibold">Koleksi Video Pembelajaran Unggulan</h3>
        <p className="mt-2 text-gray-500">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        <div className="flex gap-20 mt-9">
          <div className="w-[23rem] space-y-4">
            <div className="border rounded-lg bg-white p-5 space-y-4">
              <div className="flex justify-between items-center">
                <h5 className="font-semibold">Filter</h5>
                <button className="btn-link text-red-500 font-semibold">
                  Reset
                </button>
              </div>
              <div className="border p-4 rounded-lg space-y-3">
                <div className="text-green-500 flex gap-4 items-center mb-4">
                  <img src="/icon-file.svg" alt="icon file" />
                  <p>Bidang Studi</p>
                  <div className="flex-1"></div>
                  <img src="/icon-up-arrow.svg" alt="" />
                </div>

                <div className="flex items-center gap-3">
                  <input type="checkbox" className="size-4 checkbox-green" />
                  <label className="text-gray-500">Matematika</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="size-4 checkbox-green" />
                  <label className="text-gray-500">Digital & Teknologi</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="size-4 checkbox-green" />
                  <label className="text-gray-500">Pengembangan Diri</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="size-4 checkbox-green" />
                  <label className="text-gray-500">Bisnis Manajemen</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
