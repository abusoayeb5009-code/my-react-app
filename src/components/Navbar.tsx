
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="p-2 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl text-xs font-black">
            DS
          </span>
          <span className="text-xl font-bold text-white">Dev Stack</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Technologies</a>
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
          <button className="text-gray-300 hover:text-white">Sign In</button>
          <button className="brand-gradient px-4 py-2 rounded-xl text-white">Sign Up</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-300 hover:text-white"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 flex flex-col gap-4 text-sm">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Technologies</a>
          <a href="#" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          <hr className="border-slate-800" />
          <button className="text-left text-gray-300">Sign In</button>
          <button className="brand-gradient py-2 rounded-xl text-white text-center">Sign Up</button>
        </div>
      )}
    </header>
  );
}