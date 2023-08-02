import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <section
      id="team"
      className=" team flex flex-col gap-8 pt-8 pb-16 items-center justify-center w-full min-h-fit  bg-[#2d0c1b] "
    >
      <div className="heading">
        <span className="text-[#CDBC9E] font-Prociono text-[2.5rem] sm:text-[5rem]">
          Meet The Team
        </span>
      </div>
      <div className="content sm:border-2 sm:border-t-0 sm:border-[#BF1B42] w-4/5 h-fit flex flex-col sm:flex-row items-center justify-center gap-28 md:gap-28 lg:gap-60 p-12 pb-24">
        <div className="image_card h-80 w-56 relative">
          <Image
            src="/anirban.png"
            alt="anirban"
            fill
            className="object-cover rounded-xl border border-[#C6627D]"
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
            src="/sainikblack.png"
            alt="sainik"
            fill
            className="object-cover rounded-xl border border-[#C6627D] contrast-125"
          />
          <div className="absolute flex flex-col gap-2 items-center bottom-4 left-14 text-white">
            <p className="font-Raleway text-xl font-semibold">Sainik Khaddar</p>
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
  );
};

export default Team;
