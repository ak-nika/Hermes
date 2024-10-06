import { Link } from "react-router-dom";
import { messages } from "../constants";
import Button from "./Button";

const MessageCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white w-[460px] min-w-[350px] px-7 py-4 rounded-2xl">
        <h1 className="poppins font-[600] text-[24px] leading-[36px] text-hermes-black text-center mt-4">
          My Messages
        </h1>
        <p className="nunito text-[14px] leading-[22.4px] text-center font-[500] mb-4">
          👇 Scroll 👇 down to check out the messages that you have received
        </p>

        <div>
          {/* Placeholder Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className="border-[1px] border-hermes-purple p-3 w-full mb-2 rounded-xl"
            >
              <h1 className="poppins font-[600] text-[16px] leading-[24px] mb-3">
                Message:
              </h1>
              <p className="nunito font-light text-[16px] leading-[25.6px] mb-3">
                {message.message}
              </p>
              <p className="nunito font-light text-[16px] leading-[25.6px] mb-3">
                {message.time}
              </p>

              <Link
                to={message.link}
                className="block w-full py-2 border-[1px] border-hermes-blue text-center nunito text-[14px] leading-[22.4px] font-[500] rounded-full"
              >
                Share Response
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-7">
          <Button className={`w-[40%]`}>Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
