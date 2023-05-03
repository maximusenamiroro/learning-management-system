import React from "react";
import "./Forgotpassword.css";
import lock from "../../assets/lock.png";
import Email from "../../components/inputs/Emailinput/Emailinput.jsx";


const Forgotpassword = () => {
  return (
    <>
     <div className="holder flex flex-col xs:hidden" >
        <div className="w-6/12 m-auto my-10 xs:hidden">
        <div className=" text-center">
          <h1 className="text-3xl font-medium mb-2 text-primary">Forgot Password ?</h1>
            <p className=" text-xl font-medium">
            No worries , we have you covered
          </p>
        </div>
        
            <div className="mt-4">
             <Email/>
            </div>

        <div className="flex justify-center mt-24">
           <button className="bg-primary px-64 py-2.5 rounded text-white text-xl">
            Reset Password
           </button>
        </div>
        </div>
        </div>
     
                     {/* MOBILE */}


                     <div className="holder flex-col hidden xs:block" >
        <div className="w-10/12 m-auto my-10 hidden xs:block">
        <div className=" text-center">
          <h1 className="text-2xl mb-2 text-primary">Forgot Password ?</h1>
            <p className=" text-xl font-medium">
            No worries , we have you covered
          </p>
        </div>
        
       <div className="mt-4">
              <p className=" font-medium">Kindly Enter your Email address</p>
              <div>
             <Email/>
             </div>
            </div>

        <div className="flex justify-center mt-24">
           <button className="bg-primary px-16 py-2.5 rounded text-white text-xl">
            Reset Password
           </button>
        </div>
        </div>  
        </div>          
    </>
  );
};

export default Forgotpassword;
