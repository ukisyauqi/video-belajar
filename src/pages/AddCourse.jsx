import Navbar from "../components/ui/Navbar"
import { formPlaceholder } from "../utils/data"
import { camelCaseToTitleCase } from "../utils/function"
import Footer from "../components/ui/Footer"
import { createCourse } from "../services/api"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export default function AddCourse() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    data.rating = parseFloat(data.rating)
    data.totalRating = parseInt(data.totalRating)
    data.price = parseInt(data.price)
    data.discount = parseFloat(data.discount)

    createCourse(data)
      .then(() => {
        toast.success("Kursus berhasil ditambahkan")
        navigate("/")
      })
      .catch((err) => toast.error(err))
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
        <h3 className="center font-semibold">Add Course</h3>
        <form onSubmit={handleSubmit}>
          {Object.keys(formPlaceholder).map((key) => (
            <div key={key}>
              <p className="mt-4">{camelCaseToTitleCase(key)}:</p>
              {typeof formPlaceholder[key] === "number" ? (
                <input
                  type="number"
                  className="mt-2"
                  name={key}
                  placeholder={formPlaceholder[key]}
                  min={0}
                  step={0.01}
                  required
                />
              ) : formPlaceholder[key].length > 80 ? (
                <textarea
                  className="mt-2 w-full h-24"
                  name={key}
                  placeholder={formPlaceholder[key]}
                  required
                />
              ) : (
                <input
                  type="text"
                  className="mt-2"
                  name={key}
                  placeholder={formPlaceholder[key]}
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
