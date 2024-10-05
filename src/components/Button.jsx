const Button = ({ children, className }) => {
  return (
    <button
      className={`text-white font-[500] text-[16px] leading-[24px] py-2 px-3 bg-hermes-purple rounded-full poppins ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
