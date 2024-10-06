import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { startLinks } from "../constants";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Nav links={startLinks} />
      <Section>
        <LoginForm />
      </Section>
      <Footer />
    </>
  );
};

export default Login;
