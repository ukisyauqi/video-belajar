import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/ui/Navbar"
import Footer from "../components/ui/Footer"
import { useState } from "react"
import Modal from "../components/ui/Modal"
import useFetch from "../hooks/useFetch"
import { deleteCourse, fetchCourseById } from "../services/api"
import { calculateDiscount, convertToRupiahVShort } from "../utils/function"
import { Loading } from "../components/ui/Loading"
import toast from "react-hot-toast"

export default function DetailCourse() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: course, loading, error } = useFetch(() => fetchCourseById(id))

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen mt-1 bg-[#fffdf3] flex flex-col">
      <Navbar>
        <div className="center gap-10">
          <a href="" className="font-medium text-green-400">
            Kategori
          </a>
          <img src="/user-avatar.png" alt="user-avatar" />
        </div>
      </Navbar>

      {/* Modal */}
      {showModal && (
        <Modal>
          <h2 className="text-xl font-semibold mb-4">Warning!</h2>
          <p className="text-gray-600 mb-4">
            Are you sure, you want to delete this course?
          </p>
          <div className="flex justify-between">
            <button
              className="bg-red-500 text-white rounded-lg px-5 py-2"
              onClick={() => {
                deleteCourse(id)
                  .then(() => {
                    toast.success("Kelas Berhasil Dihapus")
                    navigate("/")
                  })
                  .catch((err) => {
                    toast.error(err.message)
                  })
              }}
            >
              Delete Course
            </button>
            <button
              className="rounded-lg px-5 py-2"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="flex-1 max-w-[1240px] mx-auto w-full px-5 pb-10">
            {/* Banner  */}
            <div
              className="rounded-xl image-center min-h-96 flex items-center text-white px-8 py-12 my-12"
              style={{ backgroundImage: "url('/banner/banner-top.jpg')" }}
            >
              <div className="max-w-5xl flex-col gap-4 mx-auto space-y-4">
                <h2 className="font-semibold">{course.title}</h2>
                <p>{course.description}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img src="/icon-rating-2.svg" alt="" />
                    <p className="underline text-sm text-gray-600 line-clamp-1">
                      {course.rating} ({course.totalRating})
                    </p>
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main */}
            <div className="flex flex-row-reverse gap-9 flex-wrap">
              {/* right aside */}
              <div className="md:w-[23rem] w-full">
                {/* buttons */}
                <div className="flex gap-4 mb-4">
                  <Link to={`/edit-course/${course.id}`} className="flex-1">
                    <button className="w-full bg-yellow-500 text-white">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="flex-1 bg-red-500 text-white"
                    onClick={() => setShowModal(true)}
                  >
                    Delete
                  </button>
                </div>

                {/* card price */}
                <div className="bg-white border rounded-lg p-6 flex flex-col gap-4">
                  <h6 className="font-semibold leading-6">{course.title}</h6>

                  <div className="flex gap-2">
                    {/* price */}
                    <p className="text-green-500 font-semibold text-lg line-clamp-1">
                      {convertToRupiahVShort(
                        calculateDiscount(course.price, course.discount)
                      )}
                    </p>
                    {/* price before discount */}
                    <p className="flex-1 text-gray-400 text-lg line-clamp-1 line-through">
                      {convertToRupiahVShort(course.price)}
                    </p>
                    <div className="bg-yellow-500 rounded-lg text-white text-xs center px-2">
                      Diskon {course.discount * 100}%
                    </div>
                  </div>

                  <p className="text-blue-500 text-sm font-medium">
                    Penawaran spesial tersisa 2 hari lagi!
                  </p>

                  <button className="bg-green-500 text-white rounded-lg w-full mt-2">
                    Beli Sekarang
                  </button>

                  {/* Fitur course */}
                  <p className="font-semibold text-sm mt-2">
                    Kelas Ini Sudah Termasuk
                  </p>
                  <div className="flex">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-1">
                        <img src="/icon-file-check.svg" alt="" />
                        <p className="text-sm text-gray-500">Ujian Akhir</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/icon-book.svg" alt="" />
                        <p className="text-sm text-gray-500">7 Dokumen</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/icon-file-check.svg" alt="" />
                        <p className="text-sm text-gray-500">Pretest</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-1">
                        <img src="/icon-video.svg" alt="" />
                        <p className="text-sm text-gray-500">49 Video</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/icon-certificate.svg" alt="" />
                        <p className="text-sm text-gray-500">Sertifikat</p>
                      </div>
                    </div>
                  </div>

                  {/* Bahasa */}
                  <p className="font-semibold text-sm mt-2">Bahasa Pengantar</p>
                  <div className="flex items-center gap-1">
                    <img src="/icon-world.svg" alt="" />
                    <p className="text-sm text-gray-500">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              {/* content */}
              <div className="flex-1 space-y-9 min-w-96">
                <div className="bg-white border rounded-lg p-6">
                  <h6 className="font-semibold leading-6">Deskripsi</h6>
                  <p className="mt-6 text-gray-500">{course.longDescription}</p>
                </div>

                {/* Section Mentor */}
                <div className="bg-white border rounded-lg p-6">
                  <h6 className="font-semibold leading-6">
                    Belajar bersama Tutor Profesional
                  </h6>

                  <div className="flex gap-4 mt-6">
                    {/* mentor card */}
                    <div className="border rounded-lg p-5 flex-1">
                      <div className="flex items-center">
                        <img
                          src={course.mentorsAvatarUrl}
                          alt="avatar"
                          className="size-10 mr-3"
                        />
                        <div>
                          <h6 className="font-medium line-clamp-1 text-sm">
                            {course.mentorsName}
                          </h6>
                          <p className="text-gray-600 line-clamp-1 text-sm">
                            <span>{course.mentorsJobTitle}</span>
                            <span className="hidden md:inline"> di</span>
                            <span className="font-semibold ml-1 hidden md:inline">
                              {course.mentorsCompanyName}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-900">
                        Berkarier di bidang HR selama lebih dari 3 tahun. Saat
                        ini bekerja sebagai Senior Talent Acquisition Specialist
                        di Wings Group Indonesia (Sayap Mas Utama) selama hampir
                        1 tahun.
                      </p>
                    </div>

                    {/* mentor card */}
                    <div className="border rounded-lg p-5 flex-1">
                      <div className="flex items-center">
                        <img
                          src={course.mentorsAvatarUrl}
                          alt="avatar"
                          className="size-10 mr-3"
                        />
                        <div>
                          <h6 className="font-medium line-clamp-1 text-sm">
                            {course.mentorsName}
                          </h6>
                          <p className="text-gray-600 line-clamp-1 text-sm">
                            <span>{course.mentorsJobTitle}</span>
                            <span className="hidden md:inline"> di</span>
                            <span className="font-semibold ml-1 hidden md:inline">
                              {course.mentorsCompanyName}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-900">
                        Berkarier di bidang HR selama lebih dari 3 tahun. Saat
                        ini bekerja sebagai Senior Talent Acquisition Specialist
                        di Wings Group Indonesia (Sayap Mas Utama) selama hampir
                        1 tahun.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}
