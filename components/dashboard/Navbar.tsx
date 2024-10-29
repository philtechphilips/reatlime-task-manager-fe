import React from "react";

const Navbar = ({ pageTitle }: any) => {
  return (
    <nav className="w-full pl-52 bg-white border-b flex items-center justify-between px-5 py-4 shadow-sm">
      <h1 className="font-semibold text-lg">{pageTitle}</h1>

      <div className="flex gap-6 items-center">
        <div className="relative">
          <i className="ri-message-2-line text-gray-600 text-lg"></i>
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-[2px] right-0"></div>
        </div>
        <div className="relative">
          <i className="ri-notification-4-line text-gray-600 text-lg"></i>
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-[2px] right-0"></div>
        </div>
        <div className="bg-[#4253F0] flex items-center justify-center rounded-full w-8  h-8">
            <h1 className="text-xl font-bold text-white">O</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
