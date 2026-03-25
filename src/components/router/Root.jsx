import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="min-h-screen py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
