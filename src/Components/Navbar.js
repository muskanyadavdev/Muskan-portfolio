import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black fixed w-full z-50">
      <h1 className="text-green-400 font-bold text-xl">Muskan Yadav</h1>

      <ul className="flex gap-8 text-gray-300">
        <li className="hover:text-green-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          <Link to="/about">About</Link>
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;