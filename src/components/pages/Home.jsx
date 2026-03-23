import React from "react";
import Banner from "./Banner";
import StatsSection from "../statas/StatsSection";
import phone from "../../assets/phone.png";
import TopApps from "./apps/TopApps";
import appsData from "../../../public/apps.json";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className=" relative z-10">
        <img
          className="items-center justify-center mx-auto sm:px-4"
          src={phone}
        />
        <StatsSection />
        <TopApps apps={appsData} />
      </div>
    </div>
  );
};

export default Home;
