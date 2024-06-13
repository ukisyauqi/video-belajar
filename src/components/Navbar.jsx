import { Link } from "react-router-dom";

export default function Navbar({ children }) {
  return (
    <nav className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl flex items-center justify-between px-20 py-6 mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        {children}
      </div>
    </nav>
  );
}
