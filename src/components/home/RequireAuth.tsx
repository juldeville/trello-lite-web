"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, onTokenChange } from "../../services/tokenStore";
import { getCurrentUser } from "@/services/auth";
import { LoaderOne } from "../ui/loader";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState<boolean>(false);

  // Retrieve token and fetch user info to check that token is valid
  const validateToken = async () => {
    const token = getToken();
    if (!token) {
      router.replace("/signin");
      return;
    }
    try {
      await getCurrentUser();
      setOk(true);
    } catch {
      router.replace("/signin");
    }
  };

  useEffect(() => {
    let isMounted = true;
    validateToken();

    const unsubscribe = onTokenChange(async (t) => {
      if (!isMounted) return;
      if (!t) {
        setOk(false);
        router.replace("/signin");
        return;
      }

      try {
        await getCurrentUser();
        if (isMounted) setOk(true);
      } catch {
        if (isMounted) {
          setOk(false);
          router.replace("/signin");
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  if (!ok) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderOne />
      </div>
    );
  }
  return <>{children}</>;
}

export default RequireAuth;
