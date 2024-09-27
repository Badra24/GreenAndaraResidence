import React from "react";
import Image from "next/image";
import TypeAzure from "../assets/Tambahan_asset/Type_Azure.png";
import TypeBrava from "../assets/Tambahan_asset/Type_Brava.png";
import TypeZara from "../assets/Tambahan_asset/Type_Zara.png";
import DescAzure from "../assets/Tambahan_asset/deskripsi_azure.png";
import DescBrava from "../assets/Tambahan_asset/deskripsi_brava.png";
import DescZara from "../assets/Tambahan_asset/deskripsi_azure.png";

export default function ClusterLainya() {
  const images = [
    {
      title: "Green Andara Residence Tipe Azure",
      price: "RP 2.838.000.000",
      hoverText: "Green Andara Residence",
      imageSrc: TypeAzure,
      hoverImage: DescAzure,
      hoverEffect:
        "transition-transform transform hover:scale-105 hover:shadow-xl",
    },
    {
      title: "Green Andara Residence Tipe Brava",
      price: "RP 3.500.000.000",
      hoverText: "Green Andara Residence",
      imageSrc: TypeBrava,
      hoverImage: DescBrava,
      hoverEffect:
        "transition-transform transform hover:scale-105 hover:shadow-xl",
    },
    {
      title: "Green Andara Residence Tipe Zara",
      price: "RP 3.652.000.000",
      hoverText: "Green Andara Residence",
      imageSrc: TypeZara,
      hoverImage: DescZara,
      hoverEffect:
        "transition-transform transform hover:scale-105 hover:shadow-xl",
    },
  ];

  return (
    <section className="py-8 md:py-16 w-full">
      <div className="w-full px-4 md:px-10">
        {/* Title and Description */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 font-jakarta text-[#735E43]">
            Cluster Lainnya
          </h2>
          <p className="text-xl md:text-3xl text-[#6D6669] font-poppins font-bold">
            Promo Terbaru 2024 Green Andara Residence
          </p>
        </div>

        {/* Photo Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full md:w-1/3 h-96 md:h-[30rem] overflow-hidden rounded-md shadow-lg group ${image.hoverEffect}`}
            >
              {/* House Image */}
              <Image
                src={image.imageSrc}
                alt={image.title}
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* Title Overlay on Image with Gradient Background */}
              <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-gradient-to-t from-[#735E43] to-transparent p-2">
                <h3 className="text-base md:text-lg font-bold">
                  {image.title}
                </h3>
                <p className="text-base md:text-lg font-bold">{image.price}</p>
              </div>

              {/* Hover Image (Full Width on Hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Image
                  src={image.hoverImage}
                  alt={image.hoverText}
                  fill
                  className="absolute inset-0 h-full w-full" // Ensure it takes full width and height
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
