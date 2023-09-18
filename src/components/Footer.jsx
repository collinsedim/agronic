import { Link } from "react-router-dom";

import logoIcon from "../assets/leaf.png";
import facebook from "/socials/facebook.png";
import twitter from "/socials/twitter.png";
import instagram from "/socials/instagram.png";
import pinterest from "/socials/pinterest.png";

const socials = [
  {
    name: "Facebook",
    icon: facebook,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
  {
    name: "Twitter",
    icon: twitter,
  },
  {
    name: "Pinterest",
    icon: pinterest,
  },
];

const Footer = () => {
  return (
    <div className="pt-2 w-full">
      <div className="px-3 mb-16 ">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 justify-center">
          <div className="sm:border-r-2 pr-4 text-right">
            <h3 className="font-heading font-bold text-xl mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold">Email</p>
                <p>info@agronic.com</p>
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <p>441 600 858</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p>76 dummy street, ABJ, NG.</p>
              </div>
            </div>
          </div>
          <div className="mx-4 sm:border-r-2 text-center max-w-[500px] pr-4">
            <div className="flex items-center justify-center mb-4">
              <img className="h-8" src={logoIcon} alt="" />{" "}
              <p className="font-heading font-[600] text-2xl">Agronic</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam quidem inventore perferendis in natus autem fuga earum
              doloremque sunt quas!
            </p>
            <div className="flex justify-center items-center mt-5 gap-2">
              {socials.map((social, i) => (
                <div
                  key={i}
                  className="bg-[#f9f8f8] p-3 rounded-full group cursor-pointer"
                >
                  <img
                    className="group-hover:animate-none animate-bounce duration-75 w-6"
                    src={social.icon}
                    alt={social.name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl mb-5">
              Utility Pages
            </h3>
            <div className="flex flex-col gap-4">
              <Link reloadDocument to="/services">
                Services
              </Link>
              <p>Products</p>
              <p>Password Protected</p>
              <p>Changelog</p>
              <p>404 Not Found</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2" />
      <div className="py-2 text-center">
        <p>
          Copyright &copy; 2023 Agronic. Developed by{" "}
          <span className="font-bold">Collins Edim</span>. <br />
          Design credits- Victorflow.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
