"use client";

import { ReactNode, useEffect, useState } from "react";
import styles from '../app/styles/auth.module.scss'

type AuthLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function AuthLayout({ children, pageTitle }: AuthLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.right__pane}>
        <div className="max-w-2xl mx-auto md:mr-auto md:ml-0 mt-10 bg-white">
          {children}
        </div>
      </div>
    </main>
  );
}
