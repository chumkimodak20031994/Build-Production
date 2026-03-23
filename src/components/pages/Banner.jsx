import React from "react";
import { FaAppStoreIos, FaGoogle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="items-center text-center justify-center my-8 px-4 mx-auto">
      <h4 className="font-bold text-4xl mb-4">
        We Build
        <br /> <span className="text-purple-600">Productive</span> Apps
      </h4>

      <p className="max-w-3xl text-center mx-auto">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex gap-4 items-center justify-center my-8">
        {/* Google Play */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-gray-400 text-gray-600 hover:bg-purple-500 hover:text-white"
        >
          <span className="mr-2">
            <FaGoogle className="text-xl text-purple-600" />
          </span>
          Google Play
        </a>

        {/* App Store */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-gray-400 text-gray-600 hover:bg-purple-600 hover:text-white"
        >
          <span className="mr-2">
            <FaAppStoreIos className="text-xl text-purple-600" />
          </span>
          App Store
        </a>
      </div>
    </div>
  );
};

export default Banner;
