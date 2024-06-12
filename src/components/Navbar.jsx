import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar({ rightSideComp }) {
  return (
    <nav className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl flex items-center justify-between px-20 py-6 mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {rightSideComp}
      </div>
    </nav>
  );
}
