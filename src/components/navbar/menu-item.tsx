"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MenuItem: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  const router = useRouter();
  return (
    <div
      className="font-montserrat cursor-pointer hover:underline"
      onClick={() => {
        router.push(url);
      }}
    >
      {title}
    </div>
  );
};

export default MenuItem;
