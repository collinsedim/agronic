import farm from "../assets/farm.jpg";

const Aims = [
  {
    title: "Start with Our Company First",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur odit non fuga, facere sapiente?",
  },
  {
    title: "Learn How to Grow Yourself",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur odit non fuga, facere sapiente?",
  },
  {
    title: "Farming Strategies of Today",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur odit non fuga, facere sapiente?",
  },
];

const WhoWeAre = () => {
  return (
    <div className="w-full h-full sm:flex relative">
      <div className="sm:w-[50%]">
        <img className="w-[100%] h-screen object-cover" src={farm} alt="" />
      </div>
      <div className="w-[50%]">
        <div className="absolute sm:left-[44%] left-[10%] sm:w-[55%] md:w-[420px] w-[80%] sm:top-[12%] top-[7px] sm:bg-white bg-white/70 rounded-3xl shadow-lg sm:pl-11 sm:py-9 py-5 pl-7 pr-7">
          <div className="">
            <div className="mb-5">
              <p className="italic font-normal text-lg text-[#68A47F]">
                Eco Friendly
              </p>
              <h2 className="text-[#274c5b] font-heading font-bold text-3xl">
                Agronic is a Friendly Organic Store
              </h2>
            </div>
            <div>
              {Aims.map((aim, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-lg font-heading font-bold">
                    {aim.title}
                  </h3>
                  <p>{aim.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
