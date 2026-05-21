import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Shop<span className="text-black">Hub</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link className="hover:text-blue-500 transition" to="/">Home</Link>
          <Link className="hover:text-blue-500 transition" to="/products">Products</Link>
          <Link className="hover:text-blue-500 transition" to="/services">Services</Link>
          <Link className="hover:text-blue-500 transition" to="/contact">Contact</Link>
          <Link className="hover:text-red-500 transition" to="/admin">Admin</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>
      )}
    </nav>
  );
}