import { useContext } from "react";
import Navbar from "../components/Navbar";
import { camelCaseToTitleCase } from "../utils/function";
import { AppContext } from "../context";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate()

  const { courses, setCourses } = useContext(AppContext);
  const course = courses.find((course) => course.id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setCourses(courses.map((c) => (c.id == id ? data : c)));
    navigate("/");
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
        <form onSubmit={handleSubmit}>
          <input
            className="mt-2"
            name="id"
            type="hidden"
            value={course.id}
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
                  defaultValue={course[key]}
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
