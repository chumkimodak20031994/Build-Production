import React from "react";

import { FaDownload, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const TopApps = ({ apps }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Trending Apps</h2>
        <p className="text-gray-500 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.slice(0, 8).map((app) => (
          <div
            key={app.id}
            onClick={() => navigate(`/apps/${app.id}`)}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 object-cover rounded bg-gray-200"
            />

            <h3 className="text-sm font-semibold mt-2">{app.title}</h3>
            <div className="flex justify-between items-center mt-2 text-xs">
              <span className="text-green-500 font-medium flex items-center gap-2 btn bg-green-100">
                <small>
                  <FaDownload />
                </small>
                {app.downloads}
              </span>

              <span className="flex items-center gap-1 text-orange-500 btn bg-amber-100">
                <FaStar />
                {app.ratingAvg}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/apps")}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default TopApps;
