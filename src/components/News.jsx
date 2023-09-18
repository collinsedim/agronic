import { newsData } from "./newsData";

import userImg from "../assets/user.png";
import arrowRight from "../assets/arrow-right.png";

const News = () => {
  return (
    <div className="py-20 px-5 max-w-[1000px] mx-auto">
      <div className="mb-9 flex justify-between items-center gap-2">
        <div className="w-[600px] ">
          <p className="text-[#68A47F] italic">News</p>
          <h2 className="md:text-3xl text-2xl mb-5 font-heading font-bold">
            Discover weekly content about organic food, & more
          </h2>
        </div>
        <button className="border-2 border-[#274c5b] hover:bg-slate-100 px-4 py-3 text-lg rounded-lg flex items-center justify-center group whitespace-nowrap">
          More News{" "}
          <img
            className="ml-1 group-hover:translate-x-1 duration-300"
            src={arrowRight}
            alt=""
          />
        </button>
      </div>
      <div className="flex md:flex-row flex-col gap-24 md:gap-10 items-center justify-center">
        {newsData.map((blog, i) => (
          <div
            key={i}
            className="px-2 cursor-pointer hover:scale-105 duration-150 w-[350px]"
          >
            <img
              className="rounded-3xl h-auto absolute w-[95%] md:w-[100%] max-w-[350px]"
              src={blog.thumbnail}
              alt={blog.title}
            />
            <div className="h-12 w-12 bg-white flex flex-col justify-center items-center rounded-full relative top-5 left-5 font-heading font-bold text-base">
              <p>{blog.day}</p>
              <p className="mt-[-8px]">{blog.month}</p>
            </div>
            <div className="bg-white w-[300px] top-12 sm:left-6 left-3 rounded-xl relative p-4 shadow-lg">
              <div className="flex gap-2 items-center mb-3">
                <img className="w-[20px]" src={userImg} alt="" />
                <p>
                  <span>By</span> {blog.author}
                </p>
              </div>
              <div className="">
                <h3 className="font-heading font-bold text-lg mb-2 leading-6">
                  {blog.title}
                </h3>
                <p>{blog.news}</p>
                <button className="bg-[#efd372] py-1 px-3 mt-4 text-lg rounded-lg flex items-center justify-center group">
                  Read More{" "}
                  <img
                    className="ml-1 group-hover:translate-x-1 duration-300"
                    src={arrowRight}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
