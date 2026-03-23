import React from "react";
import { Link, NavLink } from "react-router";
import hero from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            Apps
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/readlist"
            className={({ isActive }) =>
              `pb-1 ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                  : "text-gray-600"
              }`
            }
          >
            Installation
          </NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-x-2 items-center">
            <img width={50} height={50} src={hero} alt="hero" />
            <a className=" text-xl text-purple-600 font-bold">HERO.IO</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/chumkimodak20031994"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 px-4 text-white text-l"
          >
            <span className="text-xl">
              <FaGithub />
            </span>
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
