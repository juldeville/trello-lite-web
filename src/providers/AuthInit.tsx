"use client";

import { useEffect, useState } from "react";
import { setToken, clearToken } from "../services/tokenStore";
import { API } from "../constants";
import { LoaderOne } from "@/components/ui/loader";
import { log } from "console";
function AuthInit({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const response = await fetch(`${API}/auth/refresh`, {
          method: "POST",
          credentials: "include",
        });
        if (!mounted) return;
        if (!response.ok) {
          console.log("no cookies bitchas");

          clearToken();
          return;
        }
        const { accessToken } = await response.json();
        accessToken ? setToken(accessToken) : clearToken();
        console.log("Access token set");
      } catch {
        clearToken();
      } finally {
        if (mounted) {
          setReady(true);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);
  if (!ready) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderOne />
      </div>
    );
  }
  return <>{children}</>;
}

export default AuthInit;
