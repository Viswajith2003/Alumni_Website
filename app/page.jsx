import Hero from "./hero/page";
import About from "./about/page";
import Footer from "./footer/page";
import Service from "./servicess/page";
import Gallery from "./gallery/page";
import Contact from "./contacts/page";
import Register from "./register/page";
import Login from "./login/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Gallery />
      <Contact />
      <Footer />
      {/* <Register />
      <Login /> */}
    </main>
  );
}
