import { Link } from "react-router-dom";
import { landing } from "../../assets";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-10 py-5">
      <div className="flex items-center gap-3">
        <img src={landing.logo} alt="logo" width={50} />
        <div className="pacifico font-normal text-2xl gradient-text">
          Hermes
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="font-bold text-hermes-purple text-[16px] poppins leading-[24px]"
        >
          Home
        </Link>
        <Link to="/" className="font-normal text-[16px] poppins leading-[24px]">
          Get Started
        </Link>
        <Link to="/" className="font-normal text-[16px] poppins leading-[24px]">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
