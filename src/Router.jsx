import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import DetailCourse from "./pages/DetailCourse"
import EditCourse from "./pages/EditCourse"
import AddCourse from "./pages/AddCourse"
import NotFound from "./pages/NotFound"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-course" element={<AddCourse />} />
      <Route path="/course/:id" element={<DetailCourse />} />
      <Route path="/edit-course/:id" element={<EditCourse />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
