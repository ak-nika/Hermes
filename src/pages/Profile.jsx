import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { profileLinks } from "../constants";
import Section from "../components/Section";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  return (
    <>
      <Nav links={profileLinks} />
      <Section>
        <ProfileCard />
      </Section>
      <Footer />
    </>
  );
};

export default Profile;
