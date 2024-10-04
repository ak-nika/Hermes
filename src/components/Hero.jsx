import { Link } from "react-router-dom";
import { landing } from "../assets";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-hermes-blue to-hermes-purple h-[650px] relative">
      <img
        src={landing.vector1}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] left-[-200px] top-[-200px]"
      />
      <img
        src={landing.vector2}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] right-[-150px] top-[-300px]"
      />

      <div className="my-[80px] mx-[120px] h-[453.38px] flex flex-col justify-center items-center relative">
        <img
          src={landing.bodyIcons}
          alt="icons"
          className="absolute w-full h-full top-0 left-0 hover-icons"
        />

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
          <Link to="/">
            <button className="text-white font-[500] text-[16px] leading-[24px] py-2 px-3 bg-hermes-purple rounded-full poppins">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
