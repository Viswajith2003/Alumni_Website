import Welcome from "./pages/welcome/page";
import About from "./pages/about/page";
import Footer from "./components/footer/page";
import Service from "./pages/servicess/page";
import Gallery from "./pages/gallery/page";
import Contact from "./pages/contacts/page";
import Register from "./authentication/register/page";
import Login from "./authentication/login/page";
import HomePage from "./pages/homePage/page";
import ViewJob from "./pages/viewJob/page";
import PostJob from "./pages/postJob/page";
import HomeNav from "./components/homeNav/page";
import AdminDash from "./pages/admin/page";

export default function Home() {
  return (
    <div>
      <Welcome />
      {/* <About /> */}
      {/* <Service /> */}
      {/* <Gallery /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <ViewJob /> */}
      {/* <PostJob /> */}
      {/* <HomePage /> */}
      {/* <AdminDash /> */}
    </div>
  );
}
