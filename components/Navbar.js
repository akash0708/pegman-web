"use client";

import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full min-h-fit px-10 sm:px-0 py-3 sm:py-5 bg-gradient-to-r from-[#370F22] to-[#720A30] font-Raleway text-xl drop-shadow-[0_4px_23px_rgba(0,0,0,0.9)] z-50">
      <div className="flex flex-row justify-center items-center gap-44">
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
          />
        </span>
      </div>

      <div
        className={
          open
            ? `links h-fit flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-20 transition-all duration-1000`
            : `links h-0 overflow-hidden transition-all duration-1000`
        }
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
