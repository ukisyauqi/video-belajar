import { useContext } from "react";
import Navbar from "../components/Navbar";
import { coursesDummyData } from "../utils/data";
import { camelCaseToTitleCase } from "../utils/function";
import { AppContext } from "../context";
import Footer from "../components/Footer";

export default function AddCourse() {
  const { courses, setCourses } = useContext(AppContext);
  const course = courses[0] && coursesDummyData[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setCourses([...courses, data]);
  };
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
          <input
            className="mt-2"
            name="id"
            type="hidden"
            value={courses.length + 1}
          />

          {Object.keys(course)
            .slice(1)
            .map((key) => (
              <>
                <p className="mt-4">{camelCaseToTitleCase(key)}:</p>
                <input
                  type="text"
                  className="mt-2"
                  name={key}
                  placeholder={course[key]}
                />
              </>
            ))}
          <button className="bg-green-500 rounded-xl w-full mt-6 text-white">
            Submit
          </button>
        </form>
      </div>

      <Footer/>
    </div>
  );
}
