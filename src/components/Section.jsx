import { landing } from "../assets";

const Section = ({ children, className }) => {
  return (
    <section
      className={`overflow-hidden bg-gradient-to-r from-hermes-blue to-hermes-purple h-[650px] relative ${
        className || ""
      }`}
    >
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

      <div>{children}</div>
    </section>
  );
};

export default Section;
