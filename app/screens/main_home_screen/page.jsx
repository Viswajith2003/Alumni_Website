"use client";
import React from "react";
import HomePage from "../../pages/homePage/page";
import About from "../../pages/about/page";
import Footer from "../../components/footer/page";
import Service from "../../pages/servicess/page";
import Gallery from "../../pages/gallery/page";
import Contact from "../../pages/contacts/page";

const MainHomeScreen = () => {
  return (
    <div>
      <HomePage />
      <About />
      <Service />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainHomeScreen;
