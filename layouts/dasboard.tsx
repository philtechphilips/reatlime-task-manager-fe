"use client";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
  pageTitle: String;
};

export default function DashboardLayout({ children, pageTitle }: DashboardLayoutProps) {
  return (
    <main className="w-full">
      <div className="relative w-full">
        <Sidebar />
        <div className="w-full">
          {children}
        </div>
      </div>
    </main>
  );
}
