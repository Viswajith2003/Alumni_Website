import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Footer from "../components/footer/Footer";
import Service from "../components/servicess/service";
import Gallery from "../components/gallery/gallery"
import Contact from   "../components/contacts/form"


export default function Home() {
  return (
    <main>
      
      <Hero/>
      <About/>
      <Service/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </main>
  );
}
