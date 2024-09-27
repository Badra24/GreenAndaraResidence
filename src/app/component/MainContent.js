"use client";

import React from "react";
import CardPhoto from "./card/CardPhoto1";
import CardPhoto2 from "./card/CardPhotos2";
import BannerBalimanan from "./card/BalimananCard";
import ClusterLainya from "./ClusterLainya";
import FacilitiesIcons from "./card/FacilitiesIcons";
import FacilitiesPhoto from "./card/FacilitiesPhoto";
import UnitLainya from "./card/UnitLainya";
import BalimananMaps from "./card/BalimananMaps";
import AndaraCard from "./card/AndaraDesc";
import FasilitasText from "./card/TextFasilitas";
import CardPhoto3 from "./card/CardPhotos3";

class MainContent extends React.Component {
  render() {
    return (
      <main className="relative flex flex-col items-center w-full min-h-screen bg-gray-100">
        {/* Card Photo section */}
        <CardPhoto />

        {/* Main content section */}

        <AndaraCard />

        <BannerBalimanan />

        <CardPhoto2 />
        <div className="flex flex-col items-center justify-center text-center z-10">
          <h2 className="text-4xl font-bold mb-2 text-white"></h2>
        </div>
        <CardPhoto3 />

        <UnitLainya />

        <ClusterLainya />

        <FasilitasText />

        <FacilitiesIcons />

        <FacilitiesPhoto />

        <BalimananMaps />
      </main>
    );
  }
}

export default MainContent;
