const WhyCard = ({ img, text, title }) => {
  return (
    <div className="border-[1px] border-hermes-purple rounded-xl w-[280px] h-[250px] pt-5 px-5">
      <div className="flex items-center justify-center hermes-gradient m-auto w-[60px] h-[60px] rounded-full">
        <img src={img} alt="sparkle" width={50.67} height={40} />
      </div>

      <h3 className="poppins text-hermes-black text-[16px] font-[600] leading-[24px] text-center">
        {title}
      </h3>
      <p className="nunito text-[16px] font-[300] leading-[25.6px] text-center">
        {text}
      </p>
    </div>
  );
};

export default WhyCard;
