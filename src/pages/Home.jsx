import Navbar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"
import BannerBottom from "../components/Home/BannerBottom"
import BannerTop from "../components/Home/BannerTop"
import CourseList from "../components/Home/CourseList"

export default function Home() {
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

      <div className="flex-1 max-w-[1240px] mx-auto w-full px-5 pb-10">
        <BannerTop />

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="font-semibold mb-2">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-gray-600">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          <CourseList />
        </div>

        <BannerBottom />
      </div>
      <Footer />
    </div>
  )
}
