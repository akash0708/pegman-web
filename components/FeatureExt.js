import React from "react";

const FeatureExt = () => {
  return (
    <section className="bg-feature-extended-phone bg-cover sm:bg-feature-extended sm:box-border sm:shadow-[inset_-550px_0_100px_0_rgba(59,16,35,1)] w-full h-fit">
      <div className="w-full sm:w-4/5 h-[40rem] relative">
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
  );
};

export default FeatureExt;
