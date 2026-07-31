import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Publications", path: "/publications" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-lg">

      <div className="mx-auto flex h-20 w-full max-w-9xl items-center justify-around px-8 lg:px-12">

        <NavLink
          to="/"
          className="text-3xl font-bold text-blue-400"
        >
          PA
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-blue-400"
                  : "text-gray-300 transition hover:text-blue-400"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="rounded-full bg-slate-700 p-2 transition hover:bg-slate-600">
            <Moon size={18} />
          </button>

        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {mobileOpen && (
        <div className="bg-slate-800 lg:hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}

    </header>
  );
}

export default Navbar;