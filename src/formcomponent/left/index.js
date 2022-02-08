import React from "react";
import Logo from "../img.png";

const Left = ({ leftStyle }) => {
  return (
    <div
      className={`${leftStyle} bg-[#00AC73] flex flex-col justify-center items-center`}
    >
      <img src={Logo} className="h-36" />
      <p className=" pt-5 text-white font-bold text-3xl text-center">
        {" "}
        Allama Iqbal open University
      </p>
    </div>
  );
};

export default Left;
