import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ComingSoon = () => {
  return (
    <section
      id="coming-soon"
      className="coming-soon flex flex-col items-center w-full min-h-screen bg-gradient-to-tr from-[#2d0c1b] via-[#3b1023] to-[#720A30]"
    >
      <div className="flex flex-row items-center pt-4">
        <div className="bg-gradient-to-l from-[#BF1B42] w-16 md:w-32 sm:w-48 h-1 rounded-md mt-5"></div>
        <span className="text-[#CDBC9E] font-Prociono text-[2.5rem] md:text-[4rem] sm:text-[5rem] pt-4 px-2 md:px-5 sm:px-10">
          Coming Soon
        </span>
        <div className="bg-gradient-to-r from-[#BF1B42] w-16 md:w-32 sm:w-48 h-1 rounded-md mt-5"></div>
      </div>

      <div className="content relative w-full sm:min-h-fit flex flex-col sm:flex-row justify-center items-center md:gap-10 lg:gap-52 px-10 md:px-20 py-12">
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
  );
};

export default ComingSoon;
