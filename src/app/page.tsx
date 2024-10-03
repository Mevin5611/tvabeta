import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Characters from  "../components/Characters";
import Journey from  "../components/Journey";
import Carspace from  "../components/Carspace";
import SocialProfile from  "../components/SocialProfile";
import Footer from  "../components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Characters/>
    <Journey/>
    <Carspace/>
    <SocialProfile/>
    <Footer/>
    </>
  );
}
