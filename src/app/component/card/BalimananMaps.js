"use client";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const BalimananMaps = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const googleMapsLink =
    "https://www.google.com/maps/place/Green+Andara+Residences/@-6.3174886,106.8068495,4563m/data=!3m1!1e3!4m6!3m5!1s0x2e69ee119398c273:0x6453aaf8a23e517e!8m2!3d-6.3174886!4d106.8068495!16s%2Fg%2F11cjjhndjv?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#E9E2DA]">
      {/* Container */}
      <div
        className="flex flex-col md:flex-row overflow-hidden mb-2 mt-2 rounded-lg"
        style={{
          width: "1411px",
          height: "700px",
          backgroundColor: "#E9E2DA",
        }}
      >
        {/* Bagian Peta */}
        <div
          className="flex-1 overflow-hidden p-3 rounded-lg"
          style={{ height: "700px" }}
        >
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19869.257265452707!2d106.8068495!3d-6.3174886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee119398c273%3A0x6453aaf8a23e517e!2sGreen%20Andara%20Residences!5e1!3m2!1sid!2sid!4v1726819977432!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Bagian Informasi Lokasi */}
        <div
          className="flex-1 p-4 overflow-y-auto rounded-lg flex flex-col"
          style={{ height: "700px" }}
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-out"
        >
          <div className="flex-grow">
            <h1 className="text-4xl text-black font-bold mb-6">Lokasi</h1>
            <h3 className="text-3xl text-black font-semibold mb-6">Map</h3>
            <p className="text-black text-lg mb-6 leading-relaxed">
              Cluster Baliman Green Andara Blok F1 No.10,
              <br />
              Pangkalan Jati Baru,
              <br />
              Cinere Depok, West Java 16513
            </p>

            <h3 className="text-2xl text-black font-semibold mb-6">
              Lokasi Green Andara
            </h3>
            <p className="text-black text-lg mb-6 leading-relaxed">
              Terletak di kawasan strategis yang berkembang pesat, lokasi ini
              semakin modern dengan adanya tol Desari yang menghubungkan Depok
              dan TB Simatupang.
            </p>
            <p className="text-black text-lg mb-6 leading-relaxed">
              Hanya selangkah dari kawasan bisnis TB Simatupang, lokasi ini
              dekat dengan Citos, PIM, pusat kuliner, sekolah-sekolah
              berkualitas seperti HighScope, Cikal, dan Al-Izhar, serta
              fasilitas kesehatan terbaik.
            </p>
          </div>
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-[#735E43] text-xl px-6 py-3 font-bold rounded-lg w-full hover:bg-[#735E43] hover:text-white transition duration-300 mt-4">
              SUBMIT
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BalimananMaps;
