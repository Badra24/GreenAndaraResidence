"use client";

import React from "react";
import Image from "next/image"; // Import the Image component

import Keamanan from "../../assets/icon/Lock_Asset/Lock.svg";
import AksesMudah from "../../assets/icon/Sun_Asset/Sun.svg";
import TamanBermain from "../../assets/icon/Heart_Asset/Heart.svg";
import Taman from "../../assets/icon/EmojioneMonotoneNationalPark/NationalPark.svg";
import Gym from "../../assets/icon/IconoirGym_Asset/IconoirGym.svg";
import KolamRenang from "../../assets/icon/IconParkSwimmingPool_Asset/iconParkSwimmingPool.svg";

const FacilitiesIcons = () => {
  const icons = [
    {
      src: Keamanan,
      title: "Keamanan 24 Jam",
    },
    {
      src: TamanBermain,
      title: "Taman Bermain Anak",
    },
    {
      src: Taman,
      title: "Taman",
    },
    {
      src: KolamRenang,
      title: "Kolam Renang",
    },
    {
      src: Gym,
      title: "Gym",
    },
    {
      src: AksesMudah,
      title: "Akses Mudah",
    },
  ];

  return (
    <div className="py-10 w-full bg-white">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {" "}
          {/* Changed to grid-cols-2 for smaller screens */}
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-white flex items-center justify-center"
                style={{
                  width: "46.2px",
                  height: "46.2px",
                  padding: "9.24px",
                  gap: "0px",
                  borderRadius: "13.86px",
                  border: "1.16px solid transparent",
                  opacity: "1", // Set opacity to 1 for visibility
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // Darker shadow
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.title}
                  width={28} // Adjusted to fit inside the container
                  height={28} // Adjusted to fit inside the container
                />
              </div>
              <h3 className="text-lg text-black font-semibold mb-1 text-center font-poppins mt-5">
                {icon.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesIcons;
