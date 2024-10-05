import Cupid from "../sections/Cupid";
import Hero from "../sections/Hero";
import Nav from "../components/Nav";
import Why from "../sections/Why";
import Footer from "../components/Footer";
import { landingLinks } from "../constants";

const Home = () => {
  return (
    <>
      <Nav links={landingLinks} />
      <Hero />
      <Why />
      <Cupid />
      <Footer />
    </>
  );
};

export default Home;
