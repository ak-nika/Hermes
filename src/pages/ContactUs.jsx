import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { contactLinks } from "../constants";

const ContactUs = () => {
  return (
    <>
      <Nav links={contactLinks} />
      <Section>
        <ContactCard />
      </Section>
      <Footer />
    </>
  );
};

export default ContactUs;
