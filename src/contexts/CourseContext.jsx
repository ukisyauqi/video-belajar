import { createContext, useContext } from "react"
import { fetchCourses } from "../services/api"
import useFetch from "../hooks/useFetch"
export const CourseContext = createContext(null)

export const CourseContextProvider = ({ children }) => {
  const {
    data: courses,
    loading,
    error,
    reFetch: reFetchCourses,
  } = useFetch(fetchCourses)

  const getCourseAtId = (id) => courses.find((course) => course.id == id)

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        getCourseAtId,
        reFetchCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export const useCourseContext = () => useContext(CourseContext)

/* 
// wrap at root component
<ContextProvider>
  <App/>
</ContextProvider> 

// usage example
export const MyComponent = () => {
  const { activeMenu, setActiveMenu } = useContext(StateContext)
  return (
    <div>{activeMenu}</div>
  );
}
*/
