import mailbox from "../assets/mailbox.png";
import almond from "/services/almond-pack.png";
import arrowRight from "../assets/arrow-right.png";

const services = [
  {
    icon: mailbox,
    title: "Dairy Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    icon: mailbox,
    title: "Store Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    icon: mailbox,
    title: "Delivery Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    icon: mailbox,
    title: "Agricultural Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    icon: mailbox,
    title: "Organic Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    icon: mailbox,
    title: "Fresh Vegetables",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis exercitationem. Lorem ipsum dolor sit amet.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="bg-cartHero w-full h-52 bg-center bg-no-repeat bg-cover">
        <div className=" flex justify-center items-center bg-white/40 w-full h-full">
          <h1 className="font-heading font-bold text-6xl">Services</h1>
        </div>
      </div>
      <div className="bg-[#f9f8f8] py-16 px-5 w-full">
        <div className="mb-5 text-center">
          <p className="italic text-[#68A47F]">What we grow</p>
          <h2 className="font-bold font-heading text-4xl text-center">
            Better Agriculture for <br /> Better Future
          </h2>
        </div>
        <div className="max-w-[1100px] md:flex mx-auto">
          <div className="flex flex-col gap-2">
            {services.slice(0, 3).map((service, index) => (
              <div key={`Service ${index}`} className="flex flex-col gap-2">
                <div className="flex justify-end">
                  <div className="bg-white flex w-14 h-14 rounded-lg p-4 relative">
                    <img
                      className="z-10 h-auto w-10"
                      src={service.icon}
                      alt={service.title}
                    />
                    <div className="bg-[#efd372] absolute h-5 w-5 rounded-full top-6 left-6"></div>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <img className="w-[450px] h-auto" src={almond} alt="" />
          <div className="flex flex-col gap-2">
            {services.slice(3, 6).map((service, index) => (
              <div key={`Service ${index}`} className="flex flex-col gap-2">
                <div className="">
                  <div className="bg-white flex w-14 h-14 rounded-lg p-4 relative">
                    <img
                      className="z-10 h-auto w-10"
                      src={service.icon}
                      alt={service.title}
                    />
                    <div className="bg-[#efd372] absolute h-5 w-5 rounded-full top-6 left-6"></div>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="border-2 border-[#274c5b] hover:bg-slate-100 px-4 py-3 text-lg rounded-lg flex items-center justify-center group whitespace-nowrap font-semibold">
            Explore More{" "}
            <img
              className="ml-1 group-hover:translate-x-1 duration-300"
              src={arrowRight}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
