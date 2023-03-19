import React from "react";
import "./Resetpassword.css";
import lock from "../../assets/lock.png";
import Resetpasswordinput from "../../components/inputs/Resetpasswordinput/Resetpasswordinput";
import Button from "./Button/button";
import PasswordInput from "../../components/inputs/Password/Passwordinput"
import Confirmpassword from "../../components/inputs/Confirmpassword/Confirmpassword"
const Resetpassword = () => {
  return (
    <>
      <div className="holder flex flex-col" >
        <div className="w-6/12 m-auto my-10 xs:hidden">
        <div className=" text-center">
          <h1 className="text-3xl font-medium mb-2">Reset Password</h1>
            <p className="font-medium">
            Your New Password must be different from the previously used
            passswords
          </p>
        </div>
        
            <div className="mt-4">
                    <PasswordInput/>
                    <Confirmpassword/>
            </div>

        <div>
          <Button/>
        </div>
        </div>
     
                     {/* MOBILE */}


                     <div className="w-9/12 m-auto my-10 hidden xs:block">
        <div className=" text-center">
          <h1 className=" text-4xl font-medium mb-2">Reset Password</h1>
            <p className="font-medium">
            Your New Password must be different from the previously used
            passswords
          </p>
        </div>
        
            <div className="mt-4">
                    <PasswordInput/>
                    <Confirmpassword/>
            </div>

        <div>
          <Button/>
        </div>
        </div>

      </div>
    </>
  );
};

export default Resetpassword;
