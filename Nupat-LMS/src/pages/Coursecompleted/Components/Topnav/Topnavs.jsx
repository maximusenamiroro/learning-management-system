import React from "react";
import Bell from "../../../../assets/Bell.svg";
import Userpic from "../../../../assets/userpic.png";

const Topnavs = () => {
  return (
    <>
      <div
        className="flex text-white text-2xl justify-between w-full h-20"
        style={{ background: "rgba(19, 30, 71, 1)" }}
      >
        <div className="p-4 ml-4">UIUX DESIGN </div>
        <div className="flex justify-center text-center pt-4 pr-24">
          <div className="mr-8">
            <img src={Bell} alt="notification" />
          </div>
          <div className="flex space-x-10 pr-4">
            <div>
              <img src={Userpic} alt="notification" />
            </div>
            <div>Name Surname</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnavs;
