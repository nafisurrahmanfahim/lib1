import HeroSlider from "../components/HeroSlider";
import Features from "../components/Features";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navber";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Section from "../components/Sections";
import Footer from "../components/Footer";
import TopLogo from "../components/TopLogo";
import Buyers from "../components/Buyers";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Production from "../components/Production";
import VisitUs from "../components/VisitUs";
import Email from "../components/Email";

const Home = () => (
  <>
    <TopLogo />
    <Navbar />
    <Hero />
    <HeroSlider />
    <About />
    <Buyers/>
    <Products/>
    <Production/>
    <VisitUs/>
    {/* <Email/> */}
    <Contact/>
    <Footer />
    {/* <FooterLast/> */}
    {/* <Instagram />
    <Features />
    <Section />
    <Newsletter />
    <Gallery /> */}
  </>
);

export default Home;
