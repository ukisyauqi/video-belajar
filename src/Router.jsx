import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import DetailCourse from "./pages/DetailCourse";
import EditCourse from "./pages/EditCourse";
import AddCourse from "./pages/AddCourse";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/course/:id" element={<DetailCourse />} />
      <Route path="/edit-course/:id" element={<EditCourse />} />
    </Routes>
  )
}
