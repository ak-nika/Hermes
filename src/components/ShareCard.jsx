import { useEffect, useState } from "react";
import { messages } from "../constants";
import Button from "./Button";
import ShareTemplate from "./ShareTemplate";
import CardWrapper from "./CardWrapper";

const ShareCard = ({ id }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const messageId = parseInt(id);
    const singleMessage = messages.filter(
      (message) => message.id === messageId
    );

    setMessage(singleMessage[0].message);
  }, []);
  return (
    <CardWrapper>
      <h1 className="poppins font-[600] text-hermes-black text-[24px] leading-[36px] text-center">
        Share
      </h1>
      <p className="nunito font-[600] text-[14px] leading-[22.4px] text-center">
        Share the Answer using the{" "}
        <span className="text-hermes-purple font-[600]">Share Now</span> button
        below now!
      </p>

      <div className="flex justify-center items-center my-4">
        <ShareTemplate text={message} />
      </div>

      <div className="flex justify-center items-center">
        <Button>Share Now</Button>
      </div>
    </CardWrapper>
  );
};

export default ShareCard;
