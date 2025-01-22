import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-white flex justify-between items-center py-3 lg:px-16 sm:px-8 px-4 font-HostGroteskRegular border-b border-gray-300 fixed w-full">
      <div className="flex gap-16">
        <div className="font-bold text-lg">
          Job <span className="text-blue-600">Search</span>
        </div>
        <ul className="flex gap-8 justify-center items-center text-gray-500 duration-150 text-sm font-HostGroteskMedium">
          <li>
            <a href="#" className="text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              Recent Jobs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-800">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="bg-fuchsia-200 px-4 py-2 font-HostGroteskMedium rounded text-fuchsia-800 hover:bg-fuchsia-600 hover:text-white duration-150 hover:shadow-lg text-sm">
          Post Job +
        </button>
        <button className="bg-blue-200 px-4 py-2 font-HostGroteskMedium rounded text-blue-800 hover:bg-blue-600 hover:text-white duration-150 hover:shadow-lg text-sm">
          Login / Singup
        </button>
      </div>
    </nav>
  );
};
