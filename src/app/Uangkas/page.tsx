import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/home" className="text-black font-bold">LOGO</Link>
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <a href="/home" className="mr-10 flex items-center">Home</a>
            <a href="/home" className="mr-10 flex items-center">Contact</a>
            <a href="/home" className="mr-10 flex items-center">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
