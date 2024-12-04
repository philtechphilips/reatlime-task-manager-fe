"use client";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function DashboardLayout({
  children,
  pageTitle,
}: DashboardLayoutProps) {
  const { user } = useUserStore(); // Access the user state
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
  }, []);

  useEffect(() => {
    if (isMounted && !user) {
      router.push("/auth/sign-in"); // Redirect only if user is not logged in after mounting
    }
  }, [isMounted, user]);

  if (!isMounted || !user) {
    // Show a loading state until the component is mounted and user is confirmed
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full">
      <div className="relative w-full">
        <Sidebar />
        <Navbar pageTitle={pageTitle} />
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
