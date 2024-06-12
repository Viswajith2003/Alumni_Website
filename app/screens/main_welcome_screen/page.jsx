"use client";
import React from "react";
import Welcome from "../../pages/welcome/page";
import About from "../../pages/about/page";
import Footer from "../../components/footer/page";
import Service from "../../pages/servicess/page";
import Gallery from "../../pages/gallery/page";
import Contact from "../../pages/contacts/page";

const MainWelcomeScreen = () => {
  return (
    <div>
      <Welcome />
      <About />
      <Service />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainWelcomeScreen;
