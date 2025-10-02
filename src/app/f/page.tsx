"use client";
import React, { useState } from "react";
import CardNav from "../components/CardNav/CardNav";


export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div className="h-screen w-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white p-10 flex flex-col space-y-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="flex justify-end text-3xl cursor-pointer"
        >
          <i className="ri-superscript"></i>
        </div>

        <ul className="font-bold text-2xl space-y-5">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="w-screen h-20 bg-red-200 flex items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <div
            onClick={() => setIsOpen(true)}
            className="text-3xl cursor-pointer"
          >
            <i className="ri-sidebar-unfold-fill"></i>
          </div>
          <h2 className="font-bold text-lg">
            HALO{" "}
            <span className="bg-black text-white p-1 text-sm rounded-md">
              Kiww
            </span>
          </h2>
        </div>

        <div>
          <CardNav
            // logo={logo}
            // logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>
      </nav>
    </div>
  );
}
