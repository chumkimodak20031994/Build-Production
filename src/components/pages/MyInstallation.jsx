import React, { useEffect, useState } from "react";

import { getInstalledApps, removeInstalledApp } from "../../localStorage";
import Swal from "sweetalert2";
import PageError from "../error/PageError";

import { FaDownload, FaStar } from "react-icons/fa";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setApps(getInstalledApps());
  }, []);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to uninstall this app?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeInstalledApp(id);

        const updated = apps.filter((app) => app.id !== id);
        setApps(updated);

        Swal.fire({
          title: "Uninstalled!",
          text: "App has been removed successfully",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const sortedApps = [...apps].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.downloads - a.downloads;
    }
    if (sortOrder === "low-high") {
      return a.downloads - b.downloads;
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold text-center">My Installed Apps</h1>
      <p className="text-sm text-gray-400 text-center my-4">
        Explore All Trending Apps on the Market developed by us
      </p>

      {apps.length > 0 && (
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-center">
            {apps.length} Apps Found
          </h2>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-1 rounded text-sm"
          >
            <option value="">Sort By Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      )}

      {apps.length === 0 ? (
        <PageError />
      ) : (
        <div className=" max-w-7xl mx-auto my-10">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition bg-white shadow-xl my-4  rounded-lg"
            >
              {/* LEFT SIDE */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                {/* Image */}
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover bg-gray-200"
                />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {app.title}
                  </h3>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1 text-green-600">
                      <FaDownload /> {app.downloads}
                    </span>

                    <span className="flex items-center gap-1 text-orange-500">
                      <FaStar /> {app.ratingAvg || 5}
                    </span>

                    <span className="text-gray-500">{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <button
                onClick={() => handleRemove(app.id)}
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
