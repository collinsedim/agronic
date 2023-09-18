import arrowWhite from "../assets/arrow-right-white.png";

const BlueButton = ({ name, click }) => {
  return (
    <button
      onClick={click}
      className="bg-[#274c5b] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#305664] flex gap-1 group"
    >
      {name}{" "}
      <img
        className="group-hover:translate-x-1 duration-300"
        src={arrowWhite}
        alt=""
      />
    </button>
  );
};

export default BlueButton;
