"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MenuItem: React.FC<{ title: string; url: string; className: string }> = ({
  title,
  url,
  className,
}) => {
  const router = useRouter();
  return (
    <div
      className={`${className} font-montserrat cursor-pointer hover:underline`}
      onClick={() => {
        router.push(url);
      }}
    >
      {title}
    </div>
  );
};

export default MenuItem;
