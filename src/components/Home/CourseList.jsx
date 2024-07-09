import CourseCard from "./CourseCard"
import { Loading } from "../ui/Loading"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { camelCaseToTitleCase } from "../../utils/function"
import { useCourseContext } from "../../contexts/CourseContext"

export default function CourseList() {
  const { courses, loading, error } = useCourseContext()

  const [tabList, setTablist] = useState([""])
  const [activeTab, setActiveTab] = useState(tabList[0])

  const [showedCourses, setShowedCourses] = useState([])

  useEffect(() => {
    setShowedCourses(courses)

    // get array of unique category in courses data, then set to tabList
    setTablist(["", ...new Set(courses.map((item) => item.category))])

    return () => {}
  }, [courses])

  useEffect(() => {
    setShowedCourses(
      courses.filter((item) => item.category.includes(activeTab))
    )
  }, [activeTab])

  if (loading) return <Loading />

  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="text-gray-600 overflow-auto flex gap-7">
        {tabList.map((tabItem, i) => (
          <div key={i}>
            <a
              className={`pl-0 ${
                activeTab === tabItem && "text-red-500"
              } font-medium`}
              onClick={() => setActiveTab(tabItem)}
            >
              <span>
                {tabItem === "" ? "Semua Kelas" : camelCaseToTitleCase(tabItem)}
              </span>
              <div className="flex mt-3">
                <div
                  className={`${
                    activeTab === tabItem && "bg-red-500"
                  } h-1.5 flex-1 rounded-full`}
                ></div>
                <div className="flex-1"></div>
              </div>
            </a>
          </div>
        ))}

        <div className="flex-1"></div>
        <Link to={"/add-course"}>
          <button className="bg-green-500 rounded-xl px-6 text-white">
            Add Course
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {showedCourses.map((course, i) => (
          <CourseCard course={course} key={i} />
        ))}
      </div>
    </>
  )
}
