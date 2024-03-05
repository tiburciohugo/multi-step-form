import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex gap-4 text-white font-bold group">
      <Link className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-200" href="/1">
        1
      </Link>
      <Link className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-200" href="/2">
        2
      </Link>
      <Link className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-200" href="/3">
        3
      </Link>
      <Link className="ring-white ring-1 rounded-full w-7 h-7 text-center hover:text-marine-blue hover:bg-light-blue hover:ring-light-blue transition ease-in-out delay-200" href="/4">
        4
      </Link>
    </nav>
  );
}
