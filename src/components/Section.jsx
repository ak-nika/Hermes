import { vector1, vector2, bodyIcons } from "../assets";

const Section = ({ children, className }) => {
  return (
    <section
      className={`overflow-hidden bg-gradient-to-r from-hermes-blue to-hermes-purple md:h-[650px] h-fit relative ${
        className || ""
      }`}
    >
      {/* Background vectors */}
      <img
        src={vector1}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] left-[-200px] top-[-200px] hidden md:block"
      />
      <img
        src={vector2}
        alt="vector"
        width={650}
        className="absolute rotate-[-15deg] right-[-150px] top-[-300px] hidden md:block"
      />

      <div className="relative w-full h-full">
        <img
          src={bodyIcons}
          alt="icons"
          className="absolute w-full h-full top-0 left-0 hover-icons hidden md:block z-10"
        />

        <div className="relative z-20 w-full h-full">{children}</div>
      </div>
    </section>
  );
};

export default Section;
