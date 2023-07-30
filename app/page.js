import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
        className="about flex flex-col lg:flex-row justify-center items-center gap-14 sm:gap-[7rem] w-full min-h-screen bg-gradient-to-br from-[#2d0c1b] via-[#3b1023] to-[#720A30] px-14 sm:px-20 py-10 sm:py-[4.5rem]"
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
        <div className="relative w-4/5 lg:w-1/3 h-96 sm:h-[30rem]">
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

      
      {/* FEATURE EXTENDED */}
      <section className="bg-feature-extended-phone bg-cover sm:bg-feature-extended sm:box-border sm:shadow-[inset_-550px_0_100px_0_rgba(59,16,35,1)] w-full h-fit">
        <div className="w-full sm:w-4/5 h-[40rem] relative">
          {/* <Image
            src="/featextd.png"
            alt="feature_extended"
            fill
            className="object-cover mix-blend-lighten"
          /> */}
          <div className="heading absolute w-full px-10 sm:p-0 sm:w-[24rem] sm:right-[-5rem] top-10 font-Raleway font-semibold uppercase text-[#DBCEB5] text-center text-3xl sm:text-5xl leading-[2.75rem] sm:leading-[4rem] tracking-wider">
            ELEVATE YOUR OCCASSIONS WITH PEGMAN
          </div>
          <div className="absolute w-full sm:w-fit justify-center items-center sm:right-[-4.5rem] bottom-[15rem] sm:bottom-[12.5rem] flex flex-row">
            <div>
            <ul className="list-disc list-outside marker:text-[#AD133C] text-white font-Raleway text-3xl">
              <li className="leading-10">Corporate events</li>
              <li className="leading-10">Birthdays</li>
              <li className="leading-10">Anniversaries</li>
            </ul>
          </div>
            
          </div>
        </div>
      </section>

      <section className="coming-soon flex flex-col items-center w-full min-h-screen bg-gradient-to-tr from-[#2d0c1b] via-[#3b1023] to-[#720A30]">
        <div className="flex flex-row items-center pt-4">
          <div className="bg-gradient-to-l from-[#BF1B42] w-16 sm:w-48 h-1 rounded-md mt-5"></div>
          <span className="text-[#CDBC9E] font-Prociono text-[2.5rem] sm:text-[5rem] pt-4 px-2 sm:px-10">
            Coming Soon
          </span>
          <div className="bg-gradient-to-r from-[#BF1B42] w-16 sm:w-48 h-1 rounded-md mt-5"></div>
        </div>

        <div className="content relative w-full sm:min-h-fit flex flex-col sm:flex-row justify-center items-center gap-24 lg:gap-72 py-12">
          <div className="image_container relative w-4/5 sm:w-64 h-[37rem]">
            <Image src="/phone.png" alt="phone" fill className="object-fit" />
          </div>
          <div className="content_container relative text-left w-96 sm:w-[28.5rem] mt-20 font-Raleway px-8 pb-[5rem]">
            <p className="heading uppercase text-[#F4E9ED] font-semibold text-3xl leading-[3rem] mb-16">
              PEGS NOW AT YOUR FINGERTIPS
            </p>
            <p className="content text-[#F9D7D7]">
              Get ready for a revolutionary way to elevate your alcohol delivery
              experience with
              <span className="font-semibold">Pegman in Kolkata!</span> <br />
              <br /> Our user-friendly app will provide a delightful browsing
              experience, allowing you to explore an extensive collection of
              beverages from renowned brands and hidden gems alike.
            </p>
            <div className="buttons mt-20 flex flex-row gap-6">
              <button className="rounded-md bg-slate-50 px-2 py-2">
                <FaApple className="inline text-3xl" />
                <span className="font-Raleway font-semibold text-gray-600 ml-2 text-lg">
                  App Store
                </span>
              </button>
              <button className="rounded-md bg-slate-50 px-2 py-2">
                <FaGooglePlay className="inline text-3xl" />
                <span className="font-Raleway font-semibold text-gray-600 ml-2 text-lg">
                  Play Store
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full min-h-screen bg-[#2d0c1b] ">
        <div className="heading">
          <span className="text-[#CDBC9E] font-Prociono text-[2.5rem] sm:text-[5rem]">
            Meet The Team
          </span>
        </div>
        <div className="content sm:border-2 sm:border-t-0 sm:border-red-500 w-4/5 h-fit flex flex-col sm:flex-row items-center justify-center gap-28 sm:gap-60 p-12 pb-24">
          <div className="image_card h-80 w-56 relative">
            <Image
              src="/anirban.png"
              alt="anirban"
              fill
              className="object-cover rounded-xl border border-red-500"
            />
            <div className="absolute flex flex-col gap-2 items-center bottom-4 left-6 text-white">
              <p className="font-Raleway text-xl font-semibold">
                Anirban DasGupta
              </p>
              <p className="uppercase font-Raleway text-sm">founder, ceo</p>
              <div className="socials flex flex-row gap-2 text-lg">
                <FaInstagram />
                <FaFacebookSquare />
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="image_card h-80 w-56 relative">
            <Image
              src="/sainik.png"
              alt="sainik"
              fill
              className="object-cover rounded-xl border border-red-500"
            />
            <div className="absolute flex flex-col gap-2 items-center bottom-4 left-6 text-white">
              <p className="font-Raleway text-xl font-semibold">
                Sainik Khaddar
              </p>
              <p className="uppercase font-Raleway text-sm">co-founder, cmo</p>
              <div className="socials flex flex-row gap-2 text-lg">
                <FaInstagram />
                <FaFacebookSquare />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer flex flex-col sm:flex-row sm:justify-between sm:items-start pt-0  sm:py-12 px-20 sm:px-40 w-full min-h-fit bg-[#2d0c1b]">
        <div className="image realtive w-40 h-40 flex justify-center items-center">
          <img src="/logo2.png" alt="logo2" />
        </div>
        <div className="quick_links flex flex-col font-Jost text-white">
          <p className="font-semibold text-2xl pb-4">Quick links</p>
          <Link href="/" className="font-thin text-base">
            Home
          </Link>
          <Link href="/" className="text-base font-thin">
            About
          </Link>
          <Link href="/" className="text-base font-thin">
            Features
          </Link>
          <Link href="/" className="text-base font-thin">
            Download
          </Link>
          <Link href="/" className="text-base font-thin">
            Team
          </Link>
          <p className="text-sm font-thin py-8 hidden sm:inline">
            Copyright ©2023 PEGMAN
          </p>
        </div>
        <div className="contact_us flex flex-col font-Jost text-white">
          <p className="font-semibold text-2xl pb-4 pt-8 sm:pt-0">Contact Us</p>
          <p>
            <span className="text-base">Mobile:</span> +91 74398 48657
          </p>
          <p>
            <span className="text-base">Email:</span> pegman406@gmail.com
          </p>
          <p className="text-sm font-thin pt-8 pb-4 inline sm:hidden">
            Copyright ©2023 PEGMAN
          </p>
        </div>
      </section>
    </>
  );
}
