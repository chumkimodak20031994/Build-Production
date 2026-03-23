import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const TopApps = ({ apps }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Trending Apps</h2>
        <p className="text-gray-500 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.slice(0, 8).map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
          >
            {/* Image */}
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-32 object-cover rounded bg-gray-200"
            />

            {/* Title */}
            <h3 className="text-sm font-semibold mt-2">{app.title}</h3>

            {/* Bottom Info */}
            <div className="flex justify-between items-center mt-2 text-xs">
              {/* Downloads */}
              <span className="text-green-500 font-medium">
                ⬇ {app.downloads}
              </span>

              {/* Rating */}
              <span className="flex items-center gap-1 text-orange-500">
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
