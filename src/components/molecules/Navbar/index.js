import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          Tailwind
        </div>
        <div className="hidden md:flex">
          <a className="mr-6 hover:text-indigo-500">Home</a>
          <a className="mr-6 hover:text-indigo-500">About</a>
          <a className="hover:text-indigo-500">Contact</a>
        </div>
        <div>
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2 text-white">
            Login
          </button>
          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md p-2 ml-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
