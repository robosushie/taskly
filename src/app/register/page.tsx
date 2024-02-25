"use client";
import DynamicGradient from "@/components/dynamic-gradient";
import Navbar from "@/components/navbar";
import RegisterBox from "@/components/register/register-box";
import Scene from "@/components/scene";

const Register = () => {
  return (
    <main className="relative w-dvw h-dvh flex flex-col justify-start items-center bg-[#000114] overflow-hidden">
      <DynamicGradient />
      <Navbar />
      <div className="relative w-full h-full z-10">
        <RegisterBox />
        <Scene />
      </div>
    </main>
  );
};

export default Register;
