import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Login',
      path: '/login'
    }
  ];

  return (
    <>
      <div className="relative bg-gray-800 h-[10vh] w-screen">
        <div className="absolute inset-x-0 top-0 flex justify-between items-center px-4 py-3">
          <div className="text-white">Quiz App</div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex flex-grow justify-end items-center space-x-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-white hover:bg-gray-600 px-3 py-2 rounded-md"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-[5vh] inset-x-0 bg-gray-800 px-4 py-2 md:hidden`}
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="block text-white hover:bg-gray-600 py-2 rounded-md"
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
