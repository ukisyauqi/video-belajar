import CourseCard from "./CourseCard"
import { fetchCoursesAtPage } from "../services/api"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context"

export default function CourseList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { courses, setCourses } = useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchCoursesAtPage(currentPage)
        if (data.length === 0) {
          setCurrentPage(currentPage)
          return
        }
        setCourses([...courses, ...data])
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      
    }
  }, [currentPage])

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-6">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}/>
        ))}
      </div>
      <div className="center">
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  )
}
