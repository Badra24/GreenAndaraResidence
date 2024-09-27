"use client";

import React from "react";
import Image from "next/image"; // Import komponen Image dari next/image

import Rumah4 from "../../assets/Facilities/rumah_4.png";
import Rumah5 from "../../assets/Facilities/rumah5.png";
import Rumah6 from "../../assets/Facilities/rumah6.png";
import Indomart from "../../assets/Facilities/indomart.png";
import KolamRenang from "../../assets/Facilities/kolam_renang.png";
import Lapangan from "../../assets/Facilities/lapanganclubhouse.png";
import Masjid from "../../assets/Facilities/masjid.png";
import MapAndara from "../../assets/Facilities/Map_Andara.png";
import ViewAtasKolamRenang from "../../assets/Facilities/view_atas_kolamrenang.png";
import MasjidAngleLain from "../../assets/Facilities/masjid_lain2.png";
import Mapandara from "../../assets/Facilities/mapandara.png";
import GerbangAndara from "../../assets/Facilities/gerbang_andara.png";

const FacilitiesPhoto = () => {
  return (
    <div className="py-10 w-full" style={{ backgroundColor: "#FBF8E4" }}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
          {/* Adjust gap-x for horizontal spacing */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Rumah4}
              alt="Rumah 4"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Rumah5}
              alt="Rumah 5"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Rumah6}
              alt="Rumah 6"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Indomart}
              alt="Indomart"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={KolamRenang}
              alt="Kolam Renang"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-md"
            // style={{ height: "250px" }}
          >
            <Image
              src={Lapangan}
              alt="Lapangan"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Masjid}
              alt="Masjid"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={MapAndara}
              alt="Map Andara"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={ViewAtasKolamRenang}
              alt="View Atas Kolam Renang"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-md"
            // style={{ height: "250px" }} // Set desired height via inline style or Tailwind classes
          >
            <Image
              src={MasjidAngleLain}
              alt="Masjid Angle Lain"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={Mapandara}
              alt="Mapandara"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={GerbangAndara}
              alt="Mapandara"
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPhoto;
