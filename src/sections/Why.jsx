import { sparkle } from "../assets";
import WhyCard from "../components/WhyCard";
import { whyDetails } from "../constants";

const Why = () => {
  return (
    <section className="md:p-[50px] p-5">
      <h1 className="poppins text-hermes-black text-[40px] leading-[60px] font-[600] text-center">
        Why Use Hermes ?
      </h1>
      <p className="nunito text-[18px] font-[500] leading-[28.8px] text-center md:mx-[120px]">
        Our Anonymous Messaging App comes along with many great features. Here
        we are going to list some of them. Have a look below.
      </p>

      <div className="flex items-center md:justify-between justify-center gap-2 mt-10 flex-wrap">
        {whyDetails.map((detail) => (
          <WhyCard
            key={detail.id}
            text={detail.text}
            title={detail.title}
            img={sparkle}
          />
        ))}
      </div>
    </section>
  );
};

export default Why;
