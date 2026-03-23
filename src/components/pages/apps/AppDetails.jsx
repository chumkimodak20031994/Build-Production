import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import PageError from "../../error/PageError";

const AppDetails = ({ apps }) => {
  const { id } = useParams();
  const [installed, setInstalled] = useState(false);

  const app = apps.find((item) => item.id === Number(id));

  if (!app) {
    return <PageError />;
  }

  const handleInstall = () => {
    setInstalled(true);

    toast.success(`${app.title} Installed Successfully`);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border p-6 rounded-lg">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 object-cover rounded"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-purple-600">{app.companyName}</span>
          </p>

          <div className="flex gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <FaDownload /> {app.downloads}
            </div>
            <div className="flex items-center gap-2 text-orange-500">
              <FaStar /> {app.ratingAvg}
            </div>
            <div>{app.reviews} Reviews</div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-6 py-2 rounded text-white ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold mb-4">Ratings</h2>

        <div className="mt-6">
          {(app.ratings || generateRatings()).map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3 group">
              <span className="w-14 text-sm">{item.name}</span>

              <div className="flex-1 bg-gray-200 h-3 rounded relative">
                <div
                  className="bg-orange-500 h-3 rounded transition-all duration-300"
                  style={{
                    width: `${(item.count / 1200) * 100}%`,
                  }}
                ></div>

                {/* Tooltip */}
                <div className="absolute -top-7 left-0 opacity-0 group-hover:opacity-100 transition text-xs bg-black text-white px-2 py-1 rounded">
                  {item.count} reviews
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-xs text-gray-400 mb-2 px-1">
            <span>0</span>
            <span>300</span>
            <span>600</span>
            <span>900</span>
            <span>1200</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
