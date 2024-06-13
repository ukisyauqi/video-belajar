import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerBottom from "../components/BannerBottom";
import BannerTop from "../components/BannerTop";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/1.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/1.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/2.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/2.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/3.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/3.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/4.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/4.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/5.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/5.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/6.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/6.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/7.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/7.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/8.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/8.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
      {
        title: "Big 4 Auditor Financial Analyst",
        courseImage: "/courses/9.jpg",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
        mentor: "Jenna Ortega",
        mentorsRole: "Senior Accountant",
        mentorsWorkplace: "Gojek",
        mentorsAvatar: "/avatar/9.png",
        rating: 3.5,
        totalRating: 86,
        price: "Rp 300K",
      },
    ]);

    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar>
        <div className="center gap-10">
          <a href="" className="font-medium text-green-400">Kategori</a>
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
