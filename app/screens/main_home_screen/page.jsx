"use client";
import React from "react";
import HomePage from "../../ui/homePage/page";
import About from "../../ui/about/page";
import Footer from "../../components/footer/page";
import Service from "../../ui/servicess/page";
import Gallery from "../../ui/gallery/page";
import Contact from "../../ui/contacts/page";

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
