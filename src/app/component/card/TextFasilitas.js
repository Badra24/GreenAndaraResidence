"use client";

import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const FasilitasText = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full h-[193px] flex flex-col  bg-[#FBF8E4]">
      <div
        className="flex flex-col items-start mt-5 ml-5"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-out"
      >
        <p className="font-poppins text-[40px] sm:text-[50px] md:text-[60px] font-bold leading-[1.2] text-[#282828] mb-1 ml-5">
          Fasilitas di
        </p>
        <p className="font-poppins text-[40px] sm:text-[50px] md:text-[60px] font-bold leading-[1.2] text-[#E1B15B] ml-5">
          Green Andara Residence
        </p>
      </div>
    </div>
  );
};

export default FasilitasText;
