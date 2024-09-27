"use client";

import React from "react";
import Head from "next/head";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import Metatag from "./component/MetaTag";

class HomePage extends React.Component {
  render() {
    return (
      <Metatag
        title="Balimanan Landing Page"
        description="Landing page Balimanan Green Andara Residence"
      >
        <div className="flex flex-col min-h-screen">
          <Head>
            <title>My Landing</title>
            <meta name="description" content="Landing page with Tailwind CSS" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          {/* Main Content section */}
          <main className="flex flex-col min-h-screen bg-gray-100">
            <MainContent />
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      </Metatag>
    );
  }
}

export default HomePage;
