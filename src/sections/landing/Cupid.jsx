import { landing } from "../../assets";
import Button from "../../components/Button";

const Cupid = () => {
  return (
    <section className="p-[50px]">
      <div className="hermes-gradient w-full p-10 flex items-center shrink-0">
        <div className="w-[70%]">
          <img src={landing.cupid} alt="cupid" width={411} height={288} />
        </div>

        <div>
          <h1 className="poppins text-white text-[28px] font-[600] leading-[42px]">
            Invite your Friends
          </h1>
          <p className="nunito text-white text-[18px] font-[500] leading-[28.8px]">
            Share the fun and excitement of receiving anonymous compliments!
            Invite your friends to join Hermes, where they can send and receive
            thoughtful messages anonymously.
          </p>
          <Button className={`flex items-center gap-2 mt-4`}>
            Copy Link
            <div className="bg-red-100 relative w-[20px]">
              <img
                src={landing.copy1}
                alt="copy icon"
                className="absolute bottom-0"
              />
              <img
                src={landing.copy2}
                alt="copy icon"
                className="absolute left-1 -top-2"
              />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cupid;
