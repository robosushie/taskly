"use client";
import { useRouter } from "next/navigation";
const HeroSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full text-2xl lg:text-6xl font-montserrat">
        Your Personal Productivity Partner
      </div>
      <div className="flex w-full text-sm lg:text-xl font-poppins">
        Are you struggling to stay organized and on top of your tasks? Look no
        further! Taskly is here to simplify your life and boost your
        productivity.
      </div>
      <div className="w-full flex justify-center lg:justify-end items-center">
        <div
          className="w-44 lg:w-52 p-2 rounded-full flex justify-center items-center gap-2 bg-black text-white hover:bg-white hover:text-black cursor-pointer text-base lg:text-xl"
          onClick={() => {
            router.push("/login");
          }}
        >
          <p className="pointer-events-none">Get Started</p>
          <svg
            className="h-5 aspect-square fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
