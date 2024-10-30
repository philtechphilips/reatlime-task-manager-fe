"use client";

import { ReactNode, useEffect, useState } from "react";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/navigation";
import styles from '../app/styles/auth.module.scss';


type AuthLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function AuthLayout({ children, pageTitle }: AuthLayoutProps) {
  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if(user && user.isVerified){
      router.push("/dashboard/home");
    }
    router.push("/auth/email-verification");
  }, []);
  
  return (
    <main className={styles.main}>
      <div className={""}>
        <div className="w-full flex !px-24">
          {children}
        </div>
      </div>
    </main>
  );
}
