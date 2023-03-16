import React from "react";
import Logo from "../Components/Nupatlogo.png"
import Coursepic from "../Components/Coursepic.svg"
import { FaCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import "../../../app.css"
import pic1 from "../Components/Coursepics/pic1.svg"
import { FaInfo } from "react-icons/fa";
import { FaClock } from "react-icons/fa";



const Mypaidcourse = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">


        {/* navheader */}
        <div className="flex justify-between ">
          <div>
            <img className="h-24" src={Logo} alt="" />
          </div>
          <div className="flex gap-5 mt-4 items-center">
            <button className="px-8 h-12 rounded-lg text-lg bg-transparent border-none font-medium">
              Log Out
            </button>
          </div>
        </div>

    
     {/* Mycourses */}

     <div className="mt-4">
        <p className="text-2xl pb-4">My Courses</p>
        <hr/>

        <div className="flex mt-4">
            <div className="text-white w-3/12 h-12">
            <img style={{
                width: '1000%'
            }} src={Coursepic} alt="" />
            <div className="mycourse h-32 rounded-b-lg pl-4">
                <p className="flex items-center"><FaCircle style={{color: "white"}}/> Now Available</p>
                <p className="font-semibold  text-2xl">UIUX DESIGN</p>
                <p>Start date: 1st of October 2022</p>
                </div>
            </div>
            <div className="flex justify-center items-center ml-24 mt-24">
               <FaPlusCircle
               size="140px"
               color="#131E47"/>               
            </div>
        </div>
     </div>

         <div className="mt-32">
            <p className="text-2xl pb-4">Suggested Courses</p>
            <hr/>



            <div className="flex justify-between mb-10">

              <div className=" w-5/12">
                <div><img src={pic1} alt="" /></div>
                <div>
                  <div className="border-black border rounded-b-lg">
                    <div className="flex justify-between mb-4 pt-4 px-2">
                    <p className="flex items-center"><FaInfo/> Product Management</p>
                    <p className="flex items-center"><FaClock/> Duration: 4- Months</p>
                    </div>
                  <p className="px-2">In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS.</p>

                <div className="flex justify-between px-4 my-4">
                  <button className="bg-transparent border border-black w-32 h-12 rounded-lg">Learn more</button>
                  <button className="bg-transparent border border-black w-32 h-12 rounded-lg">Enroll Now</button>
                </div>
                </div>
                </div>
              </div>
 
 
 
 
 
                                           {/* course2 */}

              <div className=" w-5/12">
                <div><img src={pic1} alt="" /></div>
                <div>
                  <div className="border-black border rounded-b-lg">
                    <div className="flex justify-between mb-4 pt-4 px-2">
                    <p className="flex items-center"><FaInfo/> Product Management</p>
                    <p className="flex items-center"><FaClock/> Duration: 4- Months</p>
                    </div>
                  <p className="px-2">In front end development, you will be learning from scratch various technologies, starting with HTML, CSS, BOOTSTRAP, JAVASCRIPT AND GIT for source Control.  You will also be learn other JavaScripts Frame works such as REACTJS and VUEJS.</p>

                <div className="flex justify-between px-4 my-4">
                  <button className="bg-transparent border border-black w-32 h-12 rounded-lg">Learn more</button>
                  <button className="bg-transparent border border-black w-32 h-12 rounded-lg">Enroll Now</button>
                </div>
                </div>
                </div>
              </div>


            </div>





         </div>

      </div>
    </>
  );
};

export default Mypaidcourse;
