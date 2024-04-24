import Welcome from "./welcome/page";
import About from "./about/page";
import Footer from "./footer/page";
import Service from "./servicess/page";
import Gallery from "./gallery/page";
import Contact from "./contacts/page";
import Register from "./register/page";
import Login from "./login/page";
import HomePage from "./homePage/page";
import Job from "./job/page";

export default function Home() {
  return (
    <div>
      <Job />
      {/* <HomePage/> */}
      {/* <Welcome />
      <About />
      <Service />
      <Gallery />
      <Contact />
      <Footer /> */}
      {/* <Register />
      <Login /> */}
    </div>
  );
}
