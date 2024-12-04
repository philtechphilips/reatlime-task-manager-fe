"use client";
import { ReactNode, useEffect, useState } from "react";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";
import styles from "../app/styles/auth.module.scss";

type AuthLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function AuthLayout({ children, pageTitle }: AuthLayoutProps) {
  const { user } = useUserStore(); // Access the user state
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
  }, []);

  useEffect(() => {
    if (isMounted && user) {
      router.push("/dashboard/home"); // Redirect only if the user is logged in after mounting
    }
  }, [isMounted, user]);

  if (!isMounted) {
    // Show a loading state until the component is mounted
    return <div>Loading...</div>;
  }

  return (
    <main className={styles.main}>
      <div className={""}>
        <div className="w-full flex !px-24">{children}</div>
      </div>
    </main>
  );
}
