// import orangeBG from "../assets/orange-bg.jpg";

const Newsletter = () => {
  return (
    <div className="max-w-[1000px] py-20 px-5 mx-auto">
      <div className="bg-newsletterBG bg-center bg-cover bg-no-repeat w-full rounded-3xl p-10 flex md:flex-row flex-col items-center md:justify-between">
        <div className="">
          <h3 className="text-white font-heading font-bold text-2xl">
            Subscribe to our Newsletter
          </h3>
        </div>
        <div>
          <input
            type="email"
            placeholder="enter your email..."
            className="px-5 py-3 rounded-lg mr-1 outline-none border-2 focus:border-[#274c5b]"
          />
          <button className="bg-[#274c5b] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#305664]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
