export default function BannerBottom() {
  return (
    <>
      <div
        className="rounded-xl image-center min-h-96 center flex-col text-white px-8 py-12 my-12"
        style={{ backgroundImage: "url('/banner/banner-bot.jpg')" }}
      >
        <div className="max-w-xl center flex-col gap-1">
          <h6 className="text-gray-400">NEWSLETTER</h6>
          <h3 className="font-medium">Mau belajar Lebih Banyak?</h3>
          <p className="text-gray-200">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <div className="w-full sm:bg-white rounded-xl p-2 flex gap-5 mt-10 sm:flex-row flex-col">
            <input
              type="text"
              placeholder="Masukan Emailmu"
              className="border-none rounded-xl text-center sm:text-left"
            />
            <button className="bg-yellow-500 rounded-xl px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
