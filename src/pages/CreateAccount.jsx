import CreateForm from "../components/CreateForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { startLinks } from "../constants";

const CreateAccount = () => {
  return (
    <>
      <Nav links={startLinks} />
      <Section>
        <CreateForm />
      </Section>
      <Footer />
    </>
  );
};

export default CreateAccount;
