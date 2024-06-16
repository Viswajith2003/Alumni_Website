"use client";
import React from "react";
import Welcome from "../../ui/welcome/page";
import About from "../../ui/about/page";
import Footer from "../../components/footer/page";
import Service from "../../ui/servicess/page";
import Gallery from "../../ui/gallery/page";
import Contact from "../../ui/contacts/page";

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
