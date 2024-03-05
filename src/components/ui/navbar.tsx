import Link from "next/link";
import React from "react";
import BgSidebarMobile from "../../../public/assets/images/bg-sidebar-mobile.svg";
import BgSidebarDesktop from "../../../public/assets/images/bg-sidebar-desktop.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex gap-4 text-white font-bold group">
      <div className="">        
        <Image
          className="w-screen block md:hidden"
          src={BgSidebarMobile}
          alt="sidebar"
        />
        <Image className="hidden md:block" src={BgSidebarDesktop} alt="sidebar" />
        {/* <img
          className="hidden md:block"
          src={BgSidebarDesktop}
          alt="sidebar"
        /> */}
      </div>


      <div className="absolute w-full mx-auto flex-1 flex justify-center py-10 space-x-5">
        <Link
          className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-100"
          href="/1"
        >
          1
        </Link>
        <Link
          className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-100"
          href="/2"
        >
          2
        </Link>
        <Link
          className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-100"
          href="/3"
        >
          3
        </Link>
        <Link
          className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-100"
          href="/4"
        >
          4
        </Link>
      </div>
    </nav>
  );
}
