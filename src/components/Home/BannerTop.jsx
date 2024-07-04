export default function BannerTop() {
  return (
    <>
      <div
          className="rounded-xl image-center min-h-96 center flex-col text-white px-8 py-12 my-12"
          style={{ backgroundImage: "url('/banner/banner-top.jpg')" }}
        >
          <div className="max-w-4xl center flex-col gap-4">
            <h1 className="font-bold">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p>
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="bg-green-500 rounded-xl px-6">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
    </>
  )
}