import React, { useEffect, useState } from "react";

import { getInstalledApps, removeInstalledApp } from "../../localStorage";
import Swal from "sweetalert2";

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
          text: "App has been removed successfully ❌",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  // ✅ Sorting logic
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
    <div className="max-w-6xl mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Installed Apps</h1>

      {/* ✅ Dropdown */}
      {apps.length > 0 && (
        <div className="flex justify-end mb-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      )}

      {apps.length === 0 ? (
        <p className="text-center text-gray-500">No apps installed yet 😢</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedApps.map((app) => (
            <div key={app.id} className="bg-white shadow rounded p-3">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-32 object-cover rounded"
              />

              <h3 className="mt-2 font-semibold">{app.title}</h3>

              <p className="text-sm text-gray-500">
                Downloads: {app.downloads}
              </p>

              <button
                onClick={() => handleRemove(app.id)}
                className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
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
