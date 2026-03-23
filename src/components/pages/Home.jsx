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
        }, 2000);
      });
  }, []);
  return (
    <div>
      <Banner />

      <div className="relative z-10">
        <img
          className="items-center justify-center mx-auto sm:px-4"
          src={phone}
        />

        <StatsSection />

        {loading ? (
          <div className="flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
          </div>
        ) : (
          <TopApps apps={apps} />
        )}
      </div>
    </div>
  );
};

export default Home;
