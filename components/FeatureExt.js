import React from "react";

const FeatureExt = () => {
  return (
    <section className="bg-feature-extended-phone bg-cover sm:bg-feature-extended sm:box-border sm:shadow-[inset_-550px_0_100px_0_rgba(59,16,35,1)] w-full h-fit">
      <div className="w-fit h-[40rem] relative flex flex-col gap-32 lg:translate-x-[65rem] md:translate-x-3/4 translate-y-20">
        <div className="heading relative w-full px-10 sm:p-0 sm:w-[24rem] font-Raleway font-semibold uppercase text-[#DBCEB5] text-3xl sm:text-5xl leading-[2.75rem] sm:leading-[4rem] tracking-wider">
          ELEVATE YOUR OCCASSIONS WITH PEGMAN
        </div>
        <div className="relative sm:translate-x-20 w-full sm:w-fit justify-center items-center flex flex-row">
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
  );
};

export default FeatureExt;
