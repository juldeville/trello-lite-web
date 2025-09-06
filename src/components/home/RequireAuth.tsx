"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../services/tokenStore";
import { getCurrentUser } from "@/services/auth";
import { LoaderOne } from "../ui/loader";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState<boolean>(false);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/signin");
      return;
    }

    (async () => {
      try {
        await getCurrentUser();
        setOk(true);
      } catch {
        router.replace("/signin");
      }
    })();
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
