import Link from "next/link";
import React from "react";
import BgSidebarMobile from "../../../public/assets/images/bg-sidebar-mobile.svg";
import BgSidebarDesktop from "../../../public/assets/images/bg-sidebar-desktop.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="group flex gap-4 font-bold text-white">
      <div className="lg:h-full">
        <Image
          className="block w-screen lg:hidden"
          src={BgSidebarMobile}
          alt="sidebar"
        />
        <Image
          className="hidden lg:block"
          src={BgSidebarDesktop}
          alt="sidebar"
          height={568}
        />
      </div>

      <div className="absolute mx-auto flex w-full flex-1 items-start justify-center space-x-5 py-10 lg:w-auto lg:flex-col lg:space-x-0 lg:space-y-6 lg:px-6">
        <Link
          className="h-7 w-7 rounded-full text-center ring-1 ring-white transition delay-100 ease-in-out hover:bg-light-blue hover:text-marine-blue hover:ring-light-blue"
          href="/"
        >
          1
        </Link>
        <Link
          className="h-7 w-7 rounded-full text-center ring-1 ring-white transition delay-100 ease-in-out hover:bg-light-blue hover:text-marine-blue hover:ring-light-blue"
          href="/select-your-plan"
        >
          2
        </Link>
        <Link
          className="h-7 w-7 rounded-full text-center ring-1 ring-white transition delay-100 ease-in-out hover:bg-light-blue hover:text-marine-blue hover:ring-light-blue"
          href="/3"
        >
          3
        </Link>
        <Link
          className="h-7 w-7 rounded-full text-center ring-1 ring-white transition delay-100 ease-in-out hover:bg-light-blue hover:text-marine-blue hover:ring-light-blue"
          href="/4"
        >
          4
        </Link>
      </div>
    </nav>
  );
}
