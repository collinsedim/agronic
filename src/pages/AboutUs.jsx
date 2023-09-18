import someFruits from "../assets/somefruits.png";
import doseJuice from "../assets/dose-juice.jpg";
import mailbox from "../assets/mailbox.png";
import arrowWhite from "../assets/arrow-right-white.png";
import tea from "../assets/tea.png";

import dianaImg from "./assets/team/girl-with-red-flower.jpg";
import mejImg from "./assets/team/mej-flowers.jpg";
import cocaImg from "./assets/team/coca-farm.jpg";

import curryPowder from "./assets/curry-powder.jpg";
import tomatoFruit from "./assets/tomato.jpg";
import nuts from "./assets/nuts.jpg";
import apple from "./assets/apple.jpg";

import facebook from "/socials/facebook.png";
import twitter from "/socials/twitter.png";
import instagram from "/socials/instagram.png";

import { mainFeatures } from "./aboutUsData";

const farmProducts = [
  {
    name: "Curry",
    icon: curryPowder,
  },
  {
    name: "Nuts",
    icon: nuts,
  },
  {
    name: "Fruits",
    icon: apple,
  },
  {
    name: "Vegetable",
    icon: tomatoFruit,
  },
];

const ourExperts = [
  {
    name: "Diana McKathy",
    position: "Farmer",
    photo: dianaImg,
    socials: {
      facebook: "#fb",
      twitter: "#tweet",
      instagram: "#insta",
    },
  },
  {
    name: "Mej FLowers",
    position: "Investor",
    photo: mejImg,
    socials: {
      facebook: "#fb",
      twitter: "#tweet",
      instagram: "#insta",
    },
  },
  {
    name: "Joan Rich",
    position: "Farmer",
    photo: cocaImg,
    socials: {
      facebook: "#fb",
      twitter: "#tweet",
      instagram: "#insta",
    },
  },
];

const AboutUs = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-aboutUsHero w-full h-52 bg-center bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="font-heading font-bold text-5xl">About Us</h1>
      </div>
      {/* End Hero section */}
      <div className="py-10">
        {/* About Section */}
        <div className="flex items-center justify-center md:px-4 px-3 py-10 gap-10 md:flex-row flex-col-reverse">
          <img
            className="lg:w-[500px] w-[320px] h-auto"
            src={someFruits}
            alt=""
          />
          <div className="md:max-w-[500px] md:p-0 px-4">
            <div>
              <p className="italic text-[#68A47F]">About Us</p>
              <h2 className="font-bold font-heading md:text-3xl text-2xl mb-4">
                We Do Creative Things
                <br /> For Success
              </h2>
              <p className="mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio nam repudiandae iure pariatur consequuntur quis
                quisquam optio corrupti commodi nemo voluptates deserunt
                impedit, eligendi labore sequi
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio nam repudiandae iure pariatur consequuntur quis
                quisquam optio corrupti commodi nemo voluptates deserunt impedit
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex gap-5 mt-5 items-center">
                  <div className="h-16 w-16 bg-white flex p-3 rounded-lg">
                    <img className="" src={tea} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      No growth hormones are used
                    </h3>
                  </div>
                </div>
                <div className="flex gap-5 mt-5 items-center">
                  <div className="h-16 w-16 bg-white flex p-3 rounded-lg">
                    <img className="" src={mailbox} alt="" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      Modern Agriculture Equiment
                    </h3>
                  </div>
                </div>
              </div>
              <button className="bg-[#274c5b] text-white mt-4 px-5 py-3 rounded-lg font-bold hover:bg-[#305664] flex gap-1 group">
                Explore More{" "}
                <img
                  className="group-hover:translate-x-1 duration-300"
                  src={arrowWhite}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        {/* About Section */}
        {/* Why choose us */}
        <div className="bg-[#f9f8f8] py-20  sm:px-5 px-3">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="max-w-[600px]">
              <p className="italic text-[#68A47F]">Why Choose us</p>
              <h2 className="font-bold font-heading md:text-3xl text-2xl mb-4">
                We Do Creative Things
                <br /> For Success
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio nam repudiandae iure pariatur consequuntur quis
                quisquam optio corrupti commodi nemo voluptates deserunt
                impedit, eligendi labore sequi
              </p>
              <div className="flex flex-col gap-4 max-w-[500px]">
                <div>
                  <div className="bg-[#d4d4d4] rounded-full p-4 font-semibold flex items-center gap-2 mb-2 max-w-[260px]">
                    <p className="h-6 w-6 rounded-full border-[5px] border-[#7eb693]"></p>
                    <p>100% Natural Product</p>
                  </div>
                  <p className="pl-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, maiores.
                  </p>
                </div>
                <div>
                  <div className="bg-[#d4d4d4] rounded-full p-4 font-semibold flex items-center gap-2 mb-2 max-w-[260px]">
                    <p className="h-6 w-6 rounded-full border-[5px] border-[#7eb693]"></p>
                    <p>Increases resistance</p>
                  </div>
                  <p className="pl-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem, maiores.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="w-[100%] max-w-[500px] h-[500px] object-cover rounded-3xl"
              src={doseJuice}
              alt=""
            />
          </div>
          {/* Our Policy */}
          <div className="mt-14 flex justify-center flex-wrap gap-4">
            {mainFeatures.map((feature, i) => (
              <div
                key={i}
                className="px-4 py-8 text-center bg-white w-48 rounded-3xl flex-col gap-3 flex justify-center items-center"
              >
                <div className="bg-[#f9f8f8] py-3 w-14 flex justify-center rounded-2xl relative">
                  <img
                    className="z-10"
                    src={feature.icon}
                    alt={feature.title}
                  />
                  <p className="h-6 w-6 bg-[#efd372] absolute left-5 top-2 rounded-full"></p>
                </div>
                <h3 className="text-xl font-bold font-heading">
                  {feature.title}
                </h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
          {/* Our Policy */}
        </div>
        {/* Why choose us */}
      </div>
      <div className="w-full mt-12">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="italic text-[#68A47F]">Team</p>
          <h2 className="font-bold font-heading md:text-3xl text-2xl mb-4">
            Our Organic Experts
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            modi labore ullam rerum consequatur. Blanditiis obcaecati illum
            aspernatur? Nesciunt, dolorum!
          </p>
        </div>
        <div className="w-full flex justify-center flex-wrap gap-5 mt-10 px-4">
          {ourExperts.map((expert, i) => (
            <div
              key={i}
              className="bg-[#f9f8f8] hover:bg-white hover:shadow-2xl rounded-3xl overflow-hidden"
            >
              <img
                className="h-[400px] w-[450px] object-cover object-top"
                src={expert.photo}
                alt={`${expert.name}, ${expert.position}`}
              />
              <div className="px-4 py-6">
                <h3 className="font-heading text-xl font-bold">
                  {expert.name}
                </h3>
                <div className="flex justify-between">
                  <p className="italic text-[#68A47F]">{expert.position}</p>
                  <div className="flex">
                    <a
                      className="hover:bg-[#efd372]/60 p-2 rounded-full"
                      href={expert.socials.facebook}
                    >
                      <img
                        className="cursor-pointer w-6 h-6"
                        src={facebook}
                        alt=""
                      />
                    </a>
                    <a
                      className="hover:bg-[#efd372]/60 p-2 rounded-full"
                      href={expert.socials.instagram}
                    >
                      <img
                        key={i}
                        className="cursor-pointer w-6 h-6 "
                        src={instagram}
                        alt=""
                      />
                    </a>
                    <a
                      className="hover:bg-[#efd372]/60 p-2 rounded-full"
                      href={expert.socials.twitter}
                    >
                      <img
                        key={i}
                        className="cursor-pointer w-6 h-6"
                        src={twitter}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#274c5b] py-20 w-full px-5 mt-20">
        <div className="mb-5 text-center">
          <p className="italic text-[#68A47F]">About Us</p>
          <h2 className="font-bold font-heading text-3xl text-white">
            What We Offer You
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {farmProducts.map((product, i) => (
            <div key={i} className="text-white text-center">
              <img
                className="w-[250px] h-[250px] rounded-3xl"
                src={product.icon}
                alt={product.name}
              />
              <p className="font-bold text-xl mt-1">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
