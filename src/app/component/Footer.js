"use client";

import React from "react";
import Image from "next/image";
import LogoAndaraPutih from "../assets/LOGO_ANDARA_PUTIH/LOGO_PUTIH_2.png";
import LogoBenhokk from "../assets/LOGO_BENHOKK/benhokk_logo.png";

class Footer extends React.Component {
  render() {
    console.log("Rendering Footer component");

    return (
      <footer className="bg-[#735E43] w-full h-[208px] flex flex-col items-center justify-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center justify-start">
            <Image
              src={LogoAndaraPutih}
              alt="Logo Left"
              className="h-90 mr-4"
              width={450}
              height={500}
            />
          </div>

          <div className="flex items-center justify-end">
            <Image
              src={LogoBenhokk}
              alt="Logo Right"
              className="h-16 ml-4 mr-10"
              width={200}
              height={130}
            />
          </div>
        </div>

        <p className="text-white mt-2">
          &copy; My Landing Page. All rights reserved By Badra.
        </p>
      </footer>
    );
  }
}

export default Footer;
