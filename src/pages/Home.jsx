import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerBottom from "../components/BannerBottom";
import BannerTop from "../components/BannerTop";
import CourseCard from "../components/CourseCard";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

export default function Home() {
  const { courses } = useContext(AppContext);

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

          <div className="text-gray-600 overflow-auto flex gap-7">
            <a className="pl-0 text-red-500 font-medium">
              <span>Semua Kelas</span>
              <div className="flex mt-3">
                <div className="bg-red-500 h-1.5 flex-1 rounded-full"></div>
                <div className="flex-1"></div>
              </div>
            </a>
            <a>Pemasaran</a>
            <a>Desain</a>
            <a>Pengembangan Diri</a>
            <a>Bisnis</a>
            <div className="flex-1"></div>
            <Link to={"/add-course"}>
              <button className="bg-green-500 rounded-xl px-6 text-white">
                Add Course
              </button>
            </Link>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            {courses.map((course, i) => (
              <div key={i}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>

        <BannerBottom />
      </div>
      <Footer />
    </div>
  );
}
