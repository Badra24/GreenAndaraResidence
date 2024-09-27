"use client";

import React from "react";
import Image from "next/image"; // Import Image dari Next.js
import LogoBalimanan from "../../assets/LOGO_BALIMAN/baliman_LOGO_warna.png"; // Ganti dengan path logo

const BannerBalimanan = () => {
  return (
    <div
      className="w-full h-[193px] flex items-center justify-center"
      style={{ backgroundColor: "#FBF8E4" }}
    >
      <Image
        src={LogoBalimanan}
        alt="Logo Balimanan"
        className="object-contain"
        width={300}
        height={150}
      />
    </div>
  );
};

export default BannerBalimanan;
