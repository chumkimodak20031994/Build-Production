import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import StatsSection from "../statas/StatsSection";
import phone from "../../assets/phone.png";
import TopApps from "./apps/TopApps";

const Home = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <Banner />

      <div className="relative z-10">
        <img
          className="items-center justify-center mx-auto sm:px-4"
          src={phone}
        />

        <StatsSection />
        <div className="text-center my-8">
          <h2 className="text-2xl font-bold">Trending Apps</h2>
          <p className="text-gray-500 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-lg text-purple-600 rounded-full animate-spin"></span>
          </div>
        ) : (
          <TopApps apps={apps} />
        )}
      </div>
    </div>
  );
};

export default Home;
