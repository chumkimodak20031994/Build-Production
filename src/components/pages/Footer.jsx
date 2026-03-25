import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-purple-400">HERO.IO</span>
          </Link>
          <p className="text-sm text-gray-400">
            Discover and install the best apps with ease. Simple, fast and
            reliable platform.
          </p>
        </div>

        <div>
          <h6 className="font-semibold mb-3">Services</h6>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Branding</li>
            <li className="hover:text-white cursor-pointer">Design</li>
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">Advertisement</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press Kit</li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h6 className="font-semibold mb-3">Connect</h6>

          <div className="flex gap-4 text-xl mb-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400"
            >
              <FaGithub />
            </a>
            <a className="hover:text-purple-400">
              <FaFacebook />
            </a>
            <a className="hover:text-purple-400">
              <FaLinkedin />
            </a>
          </div>

          <p className="text-sm text-gray-400">Email: support@hero.io</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} HERO.IO — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
