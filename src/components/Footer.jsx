import { rectangle } from "../assets";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <footer className="bg-hermes-purple p-10 flex flex-col md:flex-row md:justify-between gap-9 md:gap-0 md:items-center items-start">
      <div className="flex items-center justify-center gap-3">
        <img src={rectangle} alt="rectangle" />
        <div>
          <h1 className="text-white poppins font-[600] text-[24px] leading-[36px]">
            Hermes Anonymous
          </h1>
          <p className="nunito font-[300] text-[18px] leading-[24.55px] text-white">
            © 2024 Hermes, All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
