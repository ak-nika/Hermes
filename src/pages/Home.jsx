import Cupid from "../sections/landing/Cupid";
import Hero from "../sections/landing/Hero";
import Nav from "../components/Nav";
import Why from "../sections/landing/Why";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Why />
      <Cupid />
      <Footer />
    </>
  );
};

export default Home;
