import React, { useEffect } from "react";
import Image from "next/image"; // Import Image dari Next.js
import LogoAndaraWarna from "../../assets/LOGO_ANDARA_WARNA/logo_andara_warna.png"; // Ganti dengan path logo
import AOS from "aos";
import "aos/dist/aos.css";

const AndaraCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center bg-white  rounded-lg p-8 w-full h-auto mx-auto"
      data-aos="fade-right"
      data-aos-delay="700"
      data-aos-duration="900"
      data-aos-easing="ease-out"
    >
      {/* Logo di tengah */}
      <div className="mb-6">
        <Image
          src={LogoAndaraWarna}
          alt="Logo Andara"
          className="object-contain"
          width={250}
          height={250}
        />
      </div>

      {/* Bungkus teks dengan div yang memiliki max-width */}
      <div className="w-full max-w-[600px]">
        <p className="font-poppins text-[26px] font-medium leading-[28px] tracking-[-0.01em] text-center text-[#735E43]">
          Miliki hunian yang nyaman dan luas di lokasi yang menunjang mobilitas
          dan dilengkapi berbagai fasilitas berkelas. Akan menjadi persembahan
          terbaik Anda untuk keluarga sebagai lambang dedikasi & hasil kerja
          keras.
          <br />
          <br />
          Green Andara Residence melakukan pengembangan baru dengan mengeluarkan
          cluster terbarunya yang lebih compact dengan desain yang modern
          elegance dikombinasi dengan lingkungan yang relatif masih hijau dan
          udara sejuk. Hunian cluster mewah ini dinamakan{" "}
          <strong>BALIMAN</strong>.
        </p>
      </div>
    </div>
  );
};

export default AndaraCard;
