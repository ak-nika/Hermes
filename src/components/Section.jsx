import { landing } from "../assets";

const Section = ({ children, className }) => {
  return (
    <section
      className={`overflow-hidden bg-gradient-to-r from-hermes-blue to-hermes-purple md:h-[650px] h-fit relative ${
        className || ""
      }`}
    >
      <img
        src={landing.vector1}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] left-[-200px] top-[-200px] hidden md:block"
      />
      <img
        src={landing.vector2}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] right-[-150px] top-[-300px] hidden md:block"
      />

      <div className="relative">
        <img
          src={landing.bodyIcons}
          alt="icons"
          className="absolute w-full h-full top-0 left-0 hover-icons hidden md:block"
        />
        {children}
      </div>
    </section>
  );
};

export default Section;
