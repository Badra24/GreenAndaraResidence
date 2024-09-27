import React, { useEffect } from "react";
import Image from "next/image";
import LandingPhotos from "../../assets/Rumah_landing_page_AWAL/Rumah_landing_page_awal.png";
import Logo from "../../assets/LOGO_ANDARA_WARNA/logo_andara_warna.png";
import ButtonWa from "../../assets/LogosWhatsappIcon_Asset/LogosWhatsappIcon.svg";
import Backround from "../../assets/Tambahan_asset/langit.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardPhoto() {
  useEffect(() => {
    AOS.init();
  }, []);

  // WhatsApp number (replace with your actual number)

  const whatsappMessage =
    "Hello, I would like to inquire about the Balimanan from Green Andara Residence."; // Default message

  const whatsappNumber = "085283762030"; // e.g., 1234567890
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  console.log(whatsappLink); // Log the link to verify

  return (
    <div
      className="relative w-full h-auto"
      style={{
        backgroundImage: `url(${Backround.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* House Image with responsive height and AOS animation */}
      <div
        className="relative w-full h-[40rem] sm:h-[50rem] md:h-[60rem] lg:h-[70rem]"
        data-aos="zoom-out-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <Image
          src={LandingPhotos}
          alt="House"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
          className="relative z-10"
        />
      </div>

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20">
        <div className="font-poppins text-[#FFFF] text-[50px] sm:text-[60px] md:text-[70px] font-[600] leading-[75px] sm:leading-[90px] md:leading-[105px] opacity-100">
          <p
            className="mb-2 text-shadow"
            data-aos="fade-up-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            Halo, Sultan!
          </p>
          <div className="font-poppins text-[#FFFF] text-[40px] sm:text-[45px] md:text-[50px] font-[600] leading-[60px] sm:leading-[75px] md:leading-[90px] opacity-100">
            <p
              className="text-shadow"
              data-aos="fade-up-right"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              Selamat Datang di Green Andara Residence
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for Logo and Buttons */}
      <div className="absolute top-9 left-10 right-10 flex flex-col sm:flex-row justify-between items-center z-30 ">
        {/* Logo on the top for mobile, left for larger screens with AOS animation */}
        <div
          className="flex items-center mb-4 sm:mb-0"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={75}
            className="w-32 sm:w-40 md:w-48 lg:w-52"
          />
        </div>

        {/* Buttons below logo for mobile, on the right for larger screens */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
          {/* Button to download PDF with AOS animation */}
          <a
            href="/Green_Andara_Booklet.pdf" // Link to your PDF
            download // This attribute triggers the download
            data-aos="fade-up" // AOS animation
            data-aos-duration="600" // Animation duration
            className="w-full sm:w-auto bg-transparent border-2 sm:border-4 border-[#6D6669] text-[#6D6669] font-bold text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow transition duration-300 ease-in-out hover:bg-[#6D6669] hover:text-white"
          >
            Download Brosur
          </a>

          {/* Button to contact via WhatsApp with AOS animation */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className="w-full sm:w-auto flex items-center justify-center bg-transparent border-2 sm:border-4 border-[#6D6669] text-[#6D6669] font-bold text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow transition duration-300 ease-in-out hover:bg-[#6D6669] hover:text-white"
          >
            <Image
              src={ButtonWa}
              alt="WhatsApp"
              width={16}
              height={16}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
            />
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
