import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 relative">
          Trusted By Millions, Built For You
          {/* <span className="block w-12 h-1 bg-white mx-auto mt-3 rounded"></span> */}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div>
            <p className="text-sm opacity-80">Total Downloads</p>
            <h3 className="text-4xl font-bold my-2">29.6M</h3>
            <p className="text-sm opacity-70">21% More Than Last Month</p>
          </div>

          {/* Item 2 */}
          <div>
            <p className="text-sm opacity-80">Total Reviews</p>
            <h3 className="text-4xl font-bold my-2">906K</h3>
            <p className="text-sm opacity-70">46% More Than Last Month</p>
          </div>

          {/* Item 3 */}
          <div>
            <p className="text-sm opacity-80">Active Apps</p>
            <h3 className="text-4xl font-bold my-2">132+</h3>
            <p className="text-sm opacity-70">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
