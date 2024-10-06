import Footer from "../components/Footer";
import MessageCard from "../components/MessageCard";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { profileLinks } from "../constants";

const Messages = () => {
  return (
    <>
      <Nav links={profileLinks} />
      <Section>
        <MessageCard />
      </Section>
      <Footer />
    </>
  );
};

export default Messages;
