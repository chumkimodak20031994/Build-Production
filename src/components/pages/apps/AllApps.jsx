import React, { useState } from "react";
import { FaCross, FaDownload, FaSearch, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const AllApps = ({ apps }) => {
  const [search, setSearch] = useState("");

  // Filter apps by search
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          {" "}
          <p className="text-sm text-gray-600">
            {filteredApps.length} Apps Found
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>

          <input
            type="text"
            placeholder="Search apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border pl-10 pr-3 py-2 rounded w-full outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      {filteredApps.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => navigate(`/apps/${app.id}`)}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 cursor-pointer hover:scale-105 duration-200"
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
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500 text-lg font-medium flex gap-2">
            <FaCross className="text-3xl text-red-600" /> No Apps Found
          </p>
        </div>
      )}
    </div>
  );
};

export default AllApps;
