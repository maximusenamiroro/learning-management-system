import React from "react";
import Topnav from "./Components/Topnav/Topnavs";
import CoursecompletedBG from "../../assets/Coursecompleted.svg";
const Coursecompleted = () => {
  return (
    <>
      <div>
        <Topnav />
      </div>

      <div className="flex justify-center items-center mt-10">
        <img src={CoursecompletedBG} alt="" />
      </div>
    </>
  );
};

export default Coursecompleted;
