import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-center items-center sm:gap-20 py-3 sm:py-5 bg-gradient-to-r from-[#370F22] to-[#720A30] font-Raleway text-xl drop-shadow-[0_4px_23px_rgba(0,0,0,0.9)] z-50">
      <Image
        src="/logo.png"
        alt="logo"
        height={50}
        width={90}
        className="inline sm:hidden"
      />
      <Link href="#home" className="text-white hidden sm:inline">
        Home
      </Link>
      <Link href="#about" className="text-white hidden sm:inline">
        About
      </Link>
      <Link href="/" className="text-white hidden sm:inline">
        Features
      </Link>
      <Link href="/" className="text-white hidden sm:inline">
        Team
      </Link>
      <Link href="/" className="text-white hidden sm:inline">
        Download
      </Link>
    </nav>
  );
};

export default Navbar;
