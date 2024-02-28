"use client";
import DynamicGradient from "@/components/dynamic-gradient";
import LoginBox from "@/components/login/login-box";
import Navbar from "@/components/navbar";
import Scene from "@/components/scene";
import { useEffect } from "react";

const Login = () => {
  return (
    <main className="relative w-dvw h-dvh flex flex-col justify-start items-center bg-[#000114] overflow-hidden">
      <DynamicGradient />
      <Navbar />
      <div className="relative w-full h-full z-10">
        <LoginBox />
        <Scene />
      </div>
    </main>
  );
};

export default Login;
