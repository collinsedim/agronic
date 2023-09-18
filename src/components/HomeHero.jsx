import fruitsOne from "../assets/fruits-1.png";
import arrowRight from "../assets/arrow-right.png";

const HomeHero = () => {
  return (
    <div className="font-heading h-[400px] flex items-center bg-[#f8f8f8] justify-between overflow-hidden">
      <div className="md:pl-20 pl-4 flex flex-col font-extrabold">
        <p className="italic font-light text-sm text-[#68A47F] underline">
          100% Natural
        </p>
        <h1 className="md:text-6xl text-5xl tracking-wide mt-2">
          Choose the best <br /> healthier way <br /> of life!
        </h1>
        <button className="bg-[#efd372] py-4 mt-4 w-[160px] text-lg rounded-lg flex items-center justify-center group">
          Explore Now{" "}
          <img
            className="ml-1 group-hover:translate-x-1 duration-300"
            src={arrowRight}
            alt=""
          />
        </button>
      </div>
      <img src={fruitsOne} alt="" className="lg:w-[600px] h-auto" />
    </div>
  );
};

export default HomeHero;
