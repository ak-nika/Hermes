import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import SendCard from "../components/SendCard";
import { profileLinks } from "../constants";

const SendMessage = () => {
  return (
    <>
      <Nav links={profileLinks} />
      <Section>
        <SendCard />
      </Section>
      <Footer />
    </>
  );
};

export default SendMessage;
