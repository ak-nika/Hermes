import { Link } from "react-router-dom";
import { contactDetails } from "../constants";
import { arrowRight } from "../assets";

const ContactCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white w-[40%] min-w-[400px] px-7 py-4 rounded-2xl">
        <h1 className="poppins font-[600] text-[24px] leading-[36px] text-center mt-4">
          Contact Us
        </h1>
        <p className="nunito font-[500] text-[18px] leading-[22.4px] text-center">
          We are always here to help
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3">
          {contactDetails.map((detail) => (
            <Link
              to={detail.link}
              key={detail.id}
              className="flex items-center justify-between border-hermes-purple border-[1px] rounded-md p-2 w-full"
            >
              <div className="flex items-center justify-center gap-3">
                <img
                  src={detail.img}
                  alt={detail.name}
                  width={32}
                  height={32}
                />
                <h3 className="nunito font-[600] text-[12px] leading-[18px]">
                  {detail.text}
                </h3>
              </div>

              <img src={arrowRight} alt="arrow" />
            </Link>
          ))}
        </div>

        <p className="nunito font-[500] text-[14px] leading-[22.4px] text-center mt-7 mx-4">
          You can contact us using the following social media platforms listed
          down below
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
