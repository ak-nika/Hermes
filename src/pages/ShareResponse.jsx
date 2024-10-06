import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { profileLinks } from "../constants";
import ShareCard from "../components/ShareCard";

const ShareResponse = () => {
  const { id } = useParams();
  return (
    <>
      <Nav links={profileLinks} />
      <Section>
        <ShareCard id={id} />
      </Section>
      <Footer />
    </>
  );
};

export default ShareResponse;
