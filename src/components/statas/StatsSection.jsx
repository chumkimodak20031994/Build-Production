import React from "react";

const statsData = [
  {
    id: 1,
    title: "Total Downloads",
    value: "29.6M",
    change: "21% More Than Last Month",
  },
  {
    id: 2,
    title: "Total Reviews",
    value: "906K",
    change: "46% More Than Last Month",
  },
  {
    id: 3,
    title: "Active Apps",
    value: "132+",
    change: "31 More Will Launch",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((item) => (
            <div key={item.id} className="transition hover:scale-105">
              <p className="text-sm opacity-80">{item.title}</p>

              <h3 className="text-4xl font-bold my-2">{item.value}</h3>

              <p className="text-sm opacity-70">{item.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
