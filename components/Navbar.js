"use client";

import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full min-h-fit sm:px-0 sm:py-5 bg-gradient-to-r from-[#370F22] to-[#720A30] font-Raleway text-xl drop-shadow-[0_4px_23px_rgba(0,0,0,0.9)] z-50">
      <div className="flex flex-row py-3 sm:py-0 justify-center w-full min-h-fit items-center gap-44 bg-gradient-to-r from-[#370F22] to-[#720A30]">
        <Image
          src="/logo.png"
          alt="logo"
          height={50}
          width={90}
          className="inline sm:hidden"
        />
        <span className="inline sm:hidden">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={28}
            color="#ffffff"
            onToggle={(toggled) => {
              console.log(toggled);
            }}
          />
        </span>
      </div>

      {/* <div className="links flex flex-row justify-center items-center gap-20">
        <Link href="#home" className="text-white hidden sm:inline">
          Home
        </Link>
        <Link href="#about" className="text-white hidden sm:inline">
          About
        </Link>
        <Link href="#feature" className="text-white hidden sm:inline">
          Features
        </Link>
        <Link href="#team" className="text-white hidden sm:inline">
          Team
        </Link>
        <Link href="#coming-soon" className="text-white hidden sm:inline">
          Download
        </Link>
      </div> */}

      <div
        className={`links w-full sm:pl-0 pl-9 sm:pb-0 pb-4 absolute sm:static flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-20 bg-gradient-to-r from-[#370F22] to-[#720A30] z-[-1] sm:z-10 transition-all duration-500 ease-in ${
          open
            ? "top-[4rem] opacity-100"
            : "top-[-14rem] sm:opacity-100 opacity-0"
        }`}
      >
        <Link href="#home" className="text-white pt-4 sm:pt-0">
          Home
        </Link>
        <Link href="#about" className="text-white">
          About
        </Link>
        <Link href="#feature" className="text-white">
          Features
        </Link>
        <Link href="#team" className="text-white">
          Team
        </Link>
        <Link href="#coming-soon" className="text-white">
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
