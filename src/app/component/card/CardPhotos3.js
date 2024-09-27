import React from "react";
import Image from "next/image";
import Photos from "../../assets/Tambahan_asset/8.jpg";

export default function CardPhoto3() {
  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-screen overflow-hidden">
      <Image
        src={Photos}
        alt="House"
        fill
        style={{ objectFit: "cover" }}
        priority
        sizes="100vw"
        className="absolute inset-0 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
}
