import React from "react";

const CardWrapper = ({ children, className }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`bg-white w-[460px] min-w-[350px] px-7 py-4 rounded-2xl ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
