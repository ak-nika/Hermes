import { Link } from "react-router-dom";
import Button from "../components/Button";
import Section from "../components/Section";

const Hero = () => {
  return (
    <Section>
      <div className="my-[80px] md:mx-[120px] mx-4 md:h-[453.38px] flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <p className="poppins bg-white border-hermes-blue border-[1px] font-normal text-[16px] leading-[24px] text-center w-fit py-2 px-4 rounded-full">
            You are{" "}
            <span className="text-hermes-purple font-extrabold">100%</span>{" "}
            Anonymous
          </p>
        </div>

        <h1 className="text-[40px] leading-[60px] poppins text-center font-[600] text-white my-6">
          Send Secret Anonymous Messages Online
        </h1>
        <p className="nunito font-[500] text-white text-[18px] leading-[28.8px] text-center">
          Hermes is an interactive anonymous messaging app. Create your Profile
          Link and Send it to all your contacts to check what do your friends
          think about you. With the help of Hermes, you can send and recieve
          anonymous compliments easily for free!
        </p>

        <div className="flex items-center justify-center mt-7">
          <Link to="/createAccount">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
