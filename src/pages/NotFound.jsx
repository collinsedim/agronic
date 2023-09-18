import { Link } from "react-router-dom";
import deadLeaves from "./assets/dead-leaves.png";
import BlueButton from "../components/BlueButton";

const NotFound = () => {
  return (
    <div className="bg-[#274c5b]/50 w-full flex sm:flex-row flex-col-reverse justify-center items-center py-10 px-4 ">
      <div>
        <img className="w-[600px]" src={deadLeaves} alt="404 Not Found" />
      </div>
      <div>
        <h1 className="font-heading font-bold text-[250px] text-[#d4d4d4]">
          404
        </h1>
        <h2 className="font-heading text-4xl font-bold mt-[-75px]">
          Page not found!
        </h2>
        <p className="mt-2 text-lg">
          The may you're looking for may have moved, or no longer exists.
        </p>
        <Link to="/">
          <BlueButton name="Go to Homepage" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
