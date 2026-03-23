import React from "react";
import { Link } from "react-router";

import pageerror from "../../assets/error-404.png";

const PageError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-8">
      <img src={pageerror} alt="PageError" className="w-full max-w-md mb-6" />

      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageError;
