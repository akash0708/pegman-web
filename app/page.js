import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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

      <section
        id="home"
        className="realtive flex min-h-screen flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="relative flex flex-col gap-1 text-center justify-center">
          <Image
            className="z-10 items-center mx-auto hidden sm:inline"
            src="/logo.png"
            alt="hero-image"
            width={500}
            height={500}
          />
          <Image
            className="z-10 items-center mx-auto inline sm:hidden"
            src="/logo.png"
            alt="hero-image"
            width={250}
            height={500}
          />
          <p className="text-white text-[30px] sm:text-[40px] font-Prociono">
            Delivering cheers to your Doorstep
          </p>
        </div>
      </section>

      <section
        id="about"
        className="about flex flex-col sm:flex-row justify-center items-center gap-14 sm:gap-[7rem] w-full min-h-screen bg-gradient-to-br from-[#2d0c1b] via-[#3b1023] to-[#720A30] px-14 sm:px-20 py-10 sm:py-[4.5rem]"
      >
        <div className="relative w-full sm:w-[28rem]">
          <p className="sm:text-[5rem] text-5xl text-[#EBDBBF] font-Prociono mb-10">
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
        <div className="relative w-full sm:w-1/3 h-96 sm:h-[30rem]">
          <Image
            src="/about.png"
            alt="about image"
            className="object-cover"
            fill
          />
        </div>
      </section>

      <section className="features flex flex-col items-center w-full min-h-screen bg-gradient-to-l from-[#2d0c1b] via-[#3b1023] to-[#720A30]">
        <div className="flex flex-row items-center pt-4">
          <div className="bg-gradient-to-l from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
          <span className="text-[#CDBC9E] font-Prociono text-5xl sm:text-[5rem] pt-4 px-2 sm:px-10">
            Features
          </span>
          <div className="bg-gradient-to-r from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
        </div>
        <div className="img_container flex flex-col sm:flex-row sm:gap-28 w-4/5 p-10 sm:px-24 items-center mt-10 min-h-fit">
          <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
            <Image
              src="/feat11.png"
              alt="feat1"
              fill
              className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
            />
            <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl font-Raleway text-[#FFE2DB] uppercase">
              doorstep
              <br />
              delivery
            </p>
          </div>
          <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
            <Image
              src="/feat22.png"
              alt="feat1"
              fill
              className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
            />
            <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl font-Raleway text-[#FFE2DB] uppercase">
              corporate
              <br />
              gifting
            </p>
          </div>
          <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
            <Image
              src="/feat33.png"
              alt="feat1"
              fill
              className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
            />
            <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl font-Raleway text-[#FFE2DB] uppercase">
              customized
              <br />
              cocktails
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
