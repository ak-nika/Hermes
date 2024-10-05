import { Link } from "react-router-dom";
import { close, landing, menu } from "../assets";
import { useState } from "react";

const Nav = ({ links }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white px-10 py-5 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <img src={landing.logo} alt="logo" width={50} />
        <div className="pacifico font-normal text-2xl gradient-text">
          Hermes
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="items-center gap-3 hidden md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-[16px] poppins leading-[24px] ${
              link.selected ? "font-bold text-hermes-purple" : "font-normal"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className="relative block md:hidden"
        onClick={() => setIsClicked(!isClicked)}
      >
        <button>
          <img src={isClicked ? close : menu} alt="menu" />
        </button>

        <div
          className={`flex flex-col items-center justify-around gap-3 absolute z-10 bg-white w-[150px] right-0 shadow transition-all ease-in duration-150 px-3 ${
            isClicked ? "h-[150px] border-t-2 border-hermes-purple" : "h-0"
          }`}
        >
          {links.map((link, index) => (
            <Link
              style={{ transitionDelay: `${index * 100}` }}
              key={link.name}
              to={link.path}
              className={`text-[16px] poppins leading-[24px] ${
                link.selected ? "font-bold text-hermes-purple" : "font-normal"
              } ${
                isClicked ? "opacity-100 block" : " hidden opacity-0"
              } transition-all ease-in duration-150`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
