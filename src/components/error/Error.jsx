import React from "react";
import error from "../../assets/App-Error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Image */}
      <img src={error} alt="Error" className="w-full max-w-md mb-6" />

      {/* Text */}
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
