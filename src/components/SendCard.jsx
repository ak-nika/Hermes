import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import Button from "./Button";

const SendCard = () => {
  const [text, setText] = useState("");
  const maxChars = 300;

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <CardWrapper>
      <h1 className="poppins font-[600] text-hermes-black text-[24px] leading-[36px] text-center">
        Say Something
      </h1>
      <p className="nunito font-[500] text-[18px] leading-[22.4px] text-center">
        Don't be shy
      </p>

      <label className="block pt-12">
        <span className="nunito font-[600] text-[12px] leading-[18px]">
          Say something about me
        </span>

        <textarea
          value={text}
          onChange={handleChange}
          maxLength={maxChars}
          placeholder={`Leave a message for ${"tony"} here`}
          className="nunito font-[600] text-[16px] w-full mt-2 outline-none h-[200px]"
        ></textarea>

        <p className="nunito font-[600] text-12px pb-3 text-[#00000080] border-b-[1px] border-hermes-gray mt-7">
          {maxChars - text.length} characters remaining
        </p>
      </label>

      <div className="flex items-center justify-center mt-7">
        <Button>Send Message</Button>
      </div>
    </CardWrapper>
  );
};

export default SendCard;
