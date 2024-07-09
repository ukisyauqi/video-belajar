import Navbar from "../components/ui/Navbar"
import { camelCaseToTitleCase } from "../utils/function"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/ui/Footer"
import { editCourse } from "../services/api"
import toast from "react-hot-toast"

import { formPlaceholder } from "../utils/data"
import { useCourseContext } from "../contexts/CourseContext"

export default function EditCourse() {
  const navigate = useNavigate()

  const { id } = useParams()
  const { getCourseAtId, reFetchCourses } = useCourseContext()
  const course = getCourseAtId(id)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.rating = parseFloat(data.rating)
    data.totalRating = parseInt(data.totalRating)
    data.price = parseInt(data.price)
    data.discount = parseFloat(data.discount)

    editCourse(id, data)
      .then(() => {
        toast.success("Kursus berhasil ditambahkan")
        reFetchCourses()
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
        toast.error(err)
      })
  }
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
      <div className="flex-1 max-w-[1240px] mx-auto w-full px-5 pb-10 mt-8">
        <h3 className="center font-semibold">Edit Course</h3>
        <form onSubmit={handleSubmit}>
          {Object.keys(formPlaceholder).map((key) => (
            <div key={key}>
              <p className="mt-4">{camelCaseToTitleCase(key)}:</p>
              {typeof formPlaceholder[key] === "number" ? (
                <input
                  type="number"
                  className="mt-2"
                  name={key}
                  defaultValue={course[key]}
                  min={0}
                  step={0.01}
                  required
                />
              ) : formPlaceholder[key].length > 80 ? (
                <textarea
                  className="mt-2 w-full h-24"
                  name={key}
                  defaultValue={course[key]}
                  required
                />
              ) : (
                <input
                  type="text"
                  className="mt-2"
                  name={key}
                  defaultValue={course[key]}
                  required
                />
              )}
            </div>
          ))}
          <button className="bg-green-500 rounded-xl w-full mt-6 text-white">
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
