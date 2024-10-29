import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../app/styles/dashboard.module.scss";
import { SIDEBAR } from "@/constants/dashboard";
import { COLOURS } from "@/constants/colors";

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className="w-48 bg-black border-r shadow-lg h-screen fixed top-0 left-0">
      <div className="border-b pb-1 px-5 pt-6">
        <h1 className={`font-bold text-lg ${styles.logo} text-gray-100 -mb-2 `}>Task</h1>
        <h1 className={`font-bold text-lg ${styles.logo} text-gray-100`}>Manager</h1>
      </div>

      <div className="px-3 py-5">
        <h4 className="font-bold text-gray-50 py-5 px-2 mb-3 text-sm">Menu</h4>
        <ul className="flex flex-col gap-12">
          {SIDEBAR &&
            SIDEBAR.map((item, index) => (
              <li key={index} className={`flex items-center gap-2 px-3 py-3 ${
                currentPath === item?.url ? `bg-[#4253F0] rounded-md` : ""
              }`}>
                <i className={`${item?.icon} text-gray-300`}></i>
                <Link href={item?.url}>
                  <p
                    className={`text-gray-50 text-sm`}
                  >
                    {item?.title}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex gap-2 items-center px-5 absolute bottom-10">
      <i className="ri-settings-line text-sm text-gray-300"></i>
      <p className=" text-sm text-gray-300">Settings</p>
      </div>
    </aside>
  );
};

export default Sidebar;
