import { logo } from "../assets";

const ShareTemplate = ({ text }) => {
  return (
    <div className="hermes-gradient w-[45%] h-[303px] p-4 flex flex-col justify-between items-center">
      <div>
        <h1 className="nunito text-white text-[20px] font-[600] leading-1 border-b-[1px] border-white pb-3">
          {text}
        </h1>
        <p className="text-white nunito text-[12px] leading-[32px] font-[500]">
          @{"Tony"}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <img src={logo} width={32} height={32} alt="logo" />
        <h3 className="poppins text-white text-[18px] leading[36px] font-[600] text-center">
          #Hermes
        </h3>
      </div>
    </div>
  );
};

export default ShareTemplate;
