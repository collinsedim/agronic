import aboutFruits from "../assets/aboutUs-fruits.png";
import mailbox from "../assets/mailbox.png";
import tea from "../assets/tea.png";
import BlueButton from "./BlueButton";

const AboutUs = () => {
  return (
    <div className="flex w-full bg-[#f9f8f8] items-center justify-center md:px-4 py-10 gap-12 md:flex-row flex-col-reverse">
      <img src={aboutFruits} alt="" />
      <div className="md:w-[500px] md:p-0 px-4">
        <div>
          <p className="italic text-[#68A47F]">About Us</p>
          <h2 className="font-bold font-heading md:text-3xl text-2xl">
            We Believe in Working
            <br /> Accredited Farmers
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            nam repudiandae iure pariatur consequuntur quis quisquam optio
            corrupti commodi nemo voluptates deserunt impedit, eligendi labore
            sequi
          </p>
        </div>
        <div>
          <div className="flex gap-5 mt-5 items-center">
            <div className="h-16 w-16 bg-white flex p-3 rounded-lg">
              <img className="" src={tea} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold">
                Quality foods only
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Architecto officiis exercitationem.
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-5 items-center mb-4">
            <div className="h-16 w-16 bg-white flex p-3 rounded-lg">
              <img className="" src={mailbox} alt="" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold">Quality only</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Architecto officiis exercitationem.
              </p>
            </div>
          </div>
          <BlueButton name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
