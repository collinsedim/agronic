import fruitPlate from "../assets/fruit-plate.png";
import freshFruits from "../assets/fresh-fruits.png";

const OfferBanner = () => {
  return (
    <div className="py-20 flex justify-center gap-4 md:flex-row flex-col items-center md:px-2">
      <div className="h-[200px] rounded-2xl md:w-[400px] w-[90%] bg-[#F96893] flex items-center justify-between px-2">
        <div className="text-white">
          <p className="text-light italic underline">Natural!!!</p>
          <h3 className="text-2xl font-heading font-bold">
            Get garden <br /> fresh fruits
          </h3>
        </div>
        <img className="w-48" src={fruitPlate} alt="" />
      </div>
      <div className="h-[200px] rounded-2xl md:w-[400px] w-[90%] bg-[#EdF2F6] flex items-center px-2 justify-between overflow-hidden">
        <div>
          <p className="text-light italic underline text-[#68A47F]">Offer!!!</p>
          <h3 className="md:text-2xl text-lg font-heading font-bold">
            Get 20% off <br /> on vegetables{" "}
          </h3>
        </div>
        <img className="w-60 md:w-52" src={freshFruits} alt="" />
      </div>
    </div>
  );
};

export default OfferBanner;
