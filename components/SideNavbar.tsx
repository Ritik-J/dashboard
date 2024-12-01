"use client";
import { useState } from "react";
import Image from "next/image";
import { MenuIcon, SidebarCloseIcon } from "lucide-react";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-2 left-1 z-50 bg-slate-400 text-white p-2 rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <SidebarCloseIcon /> : <MenuIcon />}
      </button>
      <div
        className={`flex flex-col justify-between fixed top-0 left-0 w-[246px] bg-white h-screen text-black shadow-md rounded-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="flex flex-col items-center pt-11 gap-8">
          <Image src="/TESLA.png" alt="tesla logo" width={138} height={17} />
          <button className="bg-[#1B59F8] text-[#1B59F8] w-48 h-11 bg-opacity-5 rounded-lg flex items-center pl-4 gap-2 font-inter">
            <Image src="/vector.png" alt="report" width={21} height={12} />
            Report
          </button>

          <div className="flex w-full pl-7 gap-3">
            <div className="flex flex-col items-center gap-8 cursor-pointer">
              <Image src="/Quiz.png" alt="quiz" width={26} height={24} />
              <Image src="/people.png" alt="people" width={26} height={24} />
              <Image
                src="/activity.png"
                alt="activity"
                width={26}
                height={24}
              />
            </div>

            <div className="flex flex-col items-center text-[#4D4D4D] cursor-pointer gap-8">
              <p>Library</p>
              <p>People</p>
              <p>Activities</p>
            </div>
          </div>

          <div className="flex flex-col w-full pl-7 mt-8 gap-8">
            <h2 className="text-[#00000080] text-[16px] font-semibold">
              Support
            </h2>
            <div className="flex gap-3 items-center text-[#4D4D4D] cursor-pointer">
              <Image src="/Bulb.png" alt="bulb" width={26} height={24} />
              <p>Get Started</p>
            </div>
            <div className="flex gap-3 items-center text-[#4D4D4D] cursor-pointer">
              <Image
                src="/Settings.png"
                alt="settings"
                width={26}
                height={24}
              />
              <p>Settings</p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col p-4 gap-1">
          <hr />
          <Image src="/Photo.png" alt="profile" width={34} height={34} />
          <h2 className="text-gray-800 text-sm font-medium font-inter ">
            Sam Wheeler
          </h2>
          <p className="text-gray-600 text-xs font-inter ">
            sam.wheeler@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
