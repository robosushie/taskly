"use client";
import { useRouter, usePathname } from "next/navigation";
import MenuItem from "./menu-item";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="font-montserrat base-padding w-full flex justify-between items-center z-50 text-white">
      <div
        className="relative h-8 lg:h-12 w-full flex justify-start items-center gap-2 cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <svg
          className="h-full aspect-square"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M10,12A2,2 0 0,0 8,14A2,2 0 0,0 10,16A2,2 0 0,0 12,14A2,2 0 0,0 10,12M6,8A2,2 0 0,0 4,10A2,2 0 0,0 6,12A2,2 0 0,0 8,10A2,2 0 0,0 6,8M6,16A2,2 0 0,0 4,18A2,2 0 0,0 6,20A2,2 0 0,0 8,18A2,2 0 0,0 6,16M18,8A2,2 0 0,0 20,6A2,2 0 0,0 18,4A2,2 0 0,0 16,6A2,2 0 0,0 18,8M14,16A2,2 0 0,0 12,18A2,2 0 0,0 14,20A2,2 0 0,0 16,18A2,2 0 0,0 14,16M18,12A2,2 0 0,0 16,14A2,2 0 0,0 18,16A2,2 0 0,0 20,14A2,2 0 0,0 18,12M14,8A2,2 0 0,0 12,10A2,2 0 0,0 14,12A2,2 0 0,0 16,10A2,2 0 0,0 14,8M10,4A2,2 0 0,0 8,6A2,2 0 0,0 10,8A2,2 0 0,0 12,6A2,2 0 0,0 10,4Z"
          />
        </svg>
        <div className="text-xl lg:text-3xl">Taskly</div>
      </div>
      {pathname === "/" && (
        <div className="hidden lg:flex text-base justify-center items-center gap-10">
          <MenuItem title="Login" url="/login" />
          <MenuItem title="Register" url="/register" />
        </div>
      )}
    </section>
  );
};

export default Navbar;
