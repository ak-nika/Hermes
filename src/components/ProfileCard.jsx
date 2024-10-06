import { Link } from "react-router-dom";
import { arrowRight, duotoneCopy, wingLetter } from "../assets";
import { profileDetails } from "../constants";

const ProfileCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white w-[40%] min-w-[400px] px-7 py-4 rounded-2xl relative">
        <img
          src={wingLetter}
          alt="winged letter"
          width={50}
          height={50}
          className="abs"
        />

        <h1 className="text-hermes-black poppins font-[600] text-[24px] leading-[36px] text-center">
          {"Tony"}'s Profile
        </h1>

        <div className="w-fit mx-auto">
          <Link
            to={`#`}
            className="nunito font-[500] text-[14px] leading-[22.4px] text-center flex items-center justify-center gap-2 mt-2 w-fit"
          >
            <span>{"http://hermes.com/tony"}</span>

            <img src={duotoneCopy} alt="copy" />
          </Link>
        </div>

        <p className="text-center nunito font-[500] text-[14px] leading-[22.4px] mt-4">
          Share your profile link ❤️ to get responses from your friend. Go
          to "View Messages" to check out the responses. 👌
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3">
          {profileDetails.map((detail) => (
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
      </div>
    </div>
  );
};

export default ProfileCard;
