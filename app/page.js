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
        <div className="relative w-1/3" style={{ height: "100%" }}>
          <Image src="/about.png" alt="about image" width={500} height={500} />
        </div>
      </section>

      <section className="features relative w-full h-screen py-5 flex flex-col items-center bg-gradient-to-l from-[#2d0c1b] via-[#3b1023] to-[#720A30]">
        <div className="flex items-center absolute m-auto">
          <div className="bg-gradient-to-l from-[#BF1B42] w-48 h-2 rounded-md"></div>
          <span className="text-[#CDBC9E] font-Prociono text-[5rem] px-10">
            Features
          </span>
          <div className="bg-gradient-to-r from-[#BF1B42] w-48 h-2 rounded-md"></div>
        </div>
        <div className="w-full mt-2 px-44 absolute top-48 flex flex-col sm:flex-row justify-between items-center">
          <div className="image_container flex flex-col gap-9 items-center w-full">
            <Image src="/feat1.png" alt="feat1" width={250} height={300} />
            <p className="img_title font-Raleway font-bold text-[#FFE2DB] text-2xl text-center">
              DOORSTEP
              <br />
              DELIVERY
            </p>
          </div>
          <div className="image_container flex flex-col gap-9 items-center w-full">
            <Image src="/feat2.png" alt="feat1" width={250} height={200} />
            <p className="img_title font-Raleway font-bold text-[#FFE2DB] text-2xl text-center">
              CORPORATE
              <br />
              GIFTING
            </p>
          </div>
          <div className="image_container flex flex-col gap-9 items-center w-full">
            <Image src="/feat3.png" alt="feat1" width={250} height={200} />
            <p className="img_title font-Raleway font-bold text-[#FFE2DB] text-2xl text-center">
              CUSTOMIZED
              <br />
              COCKTAILS
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
