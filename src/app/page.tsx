"use client";
import DynamicGradient from "@/components/dynamic-gradient";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Scene from "@/components/scene";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <main className="relative w-dvw h-dvh flex flex-col justify-start items-center bg-[#000114] overflow-hidden">
      <DynamicGradient />
      <Navbar />
      <div className="w-full grow flex flex-col lg:flex-row z-50 ">
        <div className="w-full lg:w-1/2 lg:h-full text-white flex flex-col p-10 lg:p-20 gap-8 lg:gap-16 justify-center items-center">
          <HeroSection />
        </div>
        <div className="w-full grow lg:w-1/2 lg:h-full">
          <Scene />
        </div>
      </div>
    </main>
  );
};

export default Home;
