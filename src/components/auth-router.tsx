"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "@hooks/useAuth";
import { Loader2 } from "lucide-react";
import DynamicGradient from "./dynamic-gradient";

const AuthRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, authorized, authenticationInProgress } = useAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!authenticationInProgress) {
      if (!authorized) {
        if (pathname.includes("/dashboard")) {
          router.push("/login");
        }
        setLoading(false);
        return; // Exit the useEffect early
      }

      if (pathname !== "/") {
        router.push(`/${user.uid}/dashboard`);
      }
      setLoading(false);
    }
  }, [authorized, router, user, authenticationInProgress, pathname]);
  if (loading)
    return (
      <section className="w-[100dvw] min-h-[100dvh] flex justify-center items-center bg-[#000114]">
        <DynamicGradient />
        <Loader2 className="z-50 w-16 h-16 lg:w-24 lg:h-24 animate-spin text-neutral-100" />
      </section>
    );
  return children;
};

export default AuthRouter;
