export default function Footer() {
  return (
    <>
      <div className="bg-white border-t ">
        <div className="max-w-[1240px] mx-auto w-full px-5 py-16">
          <div className="flex flex-col sm:flex-row justify-between border-b pb-10">
            <div className="space-y-2">
              <img src="/logo.png" alt="" className="mb-6" />
              <p className="max-w-96 font-semibold">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </p>
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
            <div className="flex gap-8 text-gray-800 flex-col sm:flex-row mt-6 sm:ml-4">
              <div className="space-y-3">
                <p className="font-semibold">Kategori</p>
                <p>Digital & teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold">Perusahaan</p>
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold">Komunitas</p>
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 flex-col-reverse sm:flex-row gap-4">
            <p className="text-gray-600">
              @2023 Gerobak Sayur All Rights Reserved.
            </p>
            <div className="flex gap-3">
              <img src="/icon-linkedin.svg" alt="icon-linkedin" />
              <img src="/icon-fb.svg" alt="icon-fb" />
              <img src="/icon-ig.svg" alt="icon-ig" />
              <img src="/icon-twitter.svg" alt="icon-twitter" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
