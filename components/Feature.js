import Image from "next/image";

const Feature = () => {
  return (
    <section
      id="feature"
      className="features flex flex-col items-center w-full min-h-screen bg-gradient-to-l from-[#2d0c1b] via-[#3b1023] to-[#720A30]"
    >
      <div className="flex flex-row items-center pt-4">
        <div className="bg-gradient-to-l from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
        <span className="text-[#CDBC9E] font-Prociono text-5xl sm:text-[5rem] pt-4 px-2 sm:px-10">
          Features
        </span>
        <div className="bg-gradient-to-r from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
      </div>
      <div className="img_container flex flex-col lg:flex-row gap-10 lg:gap-28 w-4/5 p-10 sm:px-24 items-center mt-10 min-h-fit">
        <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
          <Image
            src="/feat11.png"
            alt="feat1"
            fill
            className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
          />
          <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl md:text-[2.2rem] lg:text-2xl font-Raleway text-[#FFE2DB] uppercase">
            doorstep delivery
          </p>
        </div>
        <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
          <Image
            src="/feat22.png"
            alt="feat1"
            fill
            className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
          />
          <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl md:text-4xl lg:text-2xl font-Raleway text-[#FFE2DB] uppercase">
            corporate gifting
          </p>
        </div>
        <div className="img_card relative w-full h-80 mb-28 text-center rounded-tr-lg">
          <Image
            src="/feat33.png"
            alt="feat1"
            fill
            className="object-cover rounded-bl-[2rem] rounded-tr-[2rem]"
          />
          <p className="absolute bottom-[-5rem] mx-12 text-center text-2xl md:text-[1.85rem] lg:text-2xl font-Raleway text-[#FFE2DB] uppercase">
            customized cocktails
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
