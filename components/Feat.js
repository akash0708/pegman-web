"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Feat = () => {
  return (
    <section
      id="feat"
      className="features flex flex-col items-center w-full min-h-fit bg-gradient-to-l from-[#2d0c1b] via-[#3b1023] to-[#720A30]"
    >
      <div className="flex flex-row items-center pt-4 pb-8">
        <div className="bg-gradient-to-l from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
        <span className="text-[#CDBC9E] font-Prociono text-5xl sm:text-[5rem] pt-4 px-2 sm:px-10">
          Features
        </span>
        <div className="bg-gradient-to-r from-[#BF1B42] w-20 sm:w-48 h-1 rounded-md mt-5"></div>
      </div>

      <div className="sm:w-1/3 w-4/5 h-4/5 py-16">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          className="sample-slider"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/feat11.png"
                alt="no img"
                className="object-cover mx-auto rounded-tr-[2rem] rounded-bl-[2rem] mb-8"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/feat22.png"
                alt="no img"
                className="object-cover mx-auto rounded-tr-[2rem] rounded-bl-[2rem] mb-8"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/feat33.png"
                alt="no img"
                className="object-cover mx-auto rounded-tr-[2rem] rounded-bl-[2rem] mb-8"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Feat;
