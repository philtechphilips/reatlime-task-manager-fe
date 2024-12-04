import { COLOURS } from "@/constants/colors";
import { navStore } from "@/store/nav";
import useUserStore from "@/store/userStore";
import React from "react";

const Navbar = ({ pageTitle }: any) => {
  const { open, toggleOpen } = navStore();
  const { user } = useUserStore();
  return (
    <nav className="w-full flex items-center justify-between md:items-end md:justify-end md:px-24 px-5 py-4 bg-neutral-100">
      <i
        className="ri-menu-2-line text-2xl md:hidden flex"
        onClick={toggleOpen}
      ></i>
      <div className=" flex items-center gap-4">
        <div
          className={`bg-[${COLOURS.primary}] cursor-pointer font-medium flex items-center gap-[2px] text-sm px-5 py-2 rounded-lg text-neutral-100`}
        >
          <i className="ri-add-fill"></i>
          <p>Create Task</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <h1 className="text-xs font-semibold">{user?.fullName.charAt(0)}</h1>
          </div>
          <h6 className="font-semibold text-xs">{user?.fullName}</h6>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

