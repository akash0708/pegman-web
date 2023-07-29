import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="fixed w-full flex justify-center items-center gap-20 py-5 bg-gradient-to-r from-[#370F22] to-[#720A30] font-Raleway text-xl drop-shadow-[0_4px_23px_rgba(0,0,0,0.9)] z-50">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/" className="text-white">
          About
        </Link>
        <Link href="/" className="text-white">
          Features
        </Link>
        <Link href="/" className="text-white">
          Team
        </Link>
        <Link href="/" className="text-white">
          Download
        </Link>
      </nav>
      <section
        className="realtive flex min-h-screen flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="relative flex flex-col text-center justify-center">
          <Image
            className="z-10 items-center mx-auto"
            src="/logo.png"
            alt="hero-image"
            width={500}
            height={500}
          />
          <p className="text-white text-[40px] font-Prociono">
            Delivering cheers at your Doorstep
          </p>
        </div>
      </section>
      <section className="about flex flex-row justify-center items-center gap-[7rem] w-full h-screen bg-gradient-to-br from-[#2d0c1b] via-[#3b1023] to-[#720A30] px-20 py-[4.5rem]">
        <div className="relative w-[28rem]">
          <p className="text-[5rem] text-[#EBDBBF] font-Prociono mb-4">
            About Us.
          </p>
          <p className="text-white font-Raleway text-lg">
            Pegman is a liquor delivery application that provides you with a one
            stop solution for the Delivery of liquor in bottles, pegs, and also
            in form of cocktails/shots/mocktails from your favourite bar to your
            doorstep. <br /> <br /> We are the only application which can
            provide you with snacks and liquor combo in one go. <br />
            <br /> Moreover, we will be letting you book your exotic
            weekend/birthday parties in homestays all around Kolkata.
          </p>
        </div>
        <div className="relative h-full w-1/3">
          <Image src="/about.png" fill alt="about image" />
        </div>
      </section>
    </>
  );
}
