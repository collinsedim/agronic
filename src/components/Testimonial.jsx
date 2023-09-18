import { useState } from "react";
import { customersData } from "./testimonialData";

import rating from "../assets/rating.png";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const summary = [
    {
      title: "100%",
      desc: "Organic",
    },
    {
      title: "285",
      desc: "Active Products",
    },
    {
      title: "350+",
      desc: "Organic Orchads",
    },
    {
      title: "25+",
      desc: "Years of Farming",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mt-14 bg-[#f9f8f8] text-center py-12 w-full px-2">
      <div className="mx-auto max-w-[800px]">
        <p className="italic font-semibold text-[16px] text-[#68A47F]">
          Testimonial
        </p>
        <h2 className="md:text-3xl text-xl font-heading font-bold mb-10">
          What Our Customers Are Saying!
        </h2>
        {customersData.map((customer, index) => (
          <div
            key={customer.id}
            className={`${
              currentSlide === index ? "flex" : "hidden"
            } flex-col items-center gap-2 mb-3`}
          >
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={customer.image}
              alt={customer.name}
            />
            <img className="w-24" src={rating} alt="" />
            <p className="md:px-0 px-4">{customer.testimonial}</p>
            <div>
              <p className="font-semibold text-lg">{customer.name}</p>
              <p className="text-sm font-light">{customer.type}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-center gap-1">
          {customersData.map((_, index) => (
            <div
              key={index}
              className={`rounded-full cursor-pointer w-3 h-3 ${
                currentSlide === index ? "bg-[#68A47F]" : "bg-[#d4d4d4]"
              }`}
              onClick={() => handleSlideChange(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center gap-6 flex-wrap md:flex-nowrap">
        {summary.map((item, i) => (
          <div key={i}>
            <div className="h-[170px] w-[170px] rounded-full border-2 border-[#68A47F] p-1">
              <div className="bg-[#d4d4d4] h-full w-full rounded-full flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl font-heading">
                  {item.title}
                </h2>
                <p className="mt-[-5px] text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
