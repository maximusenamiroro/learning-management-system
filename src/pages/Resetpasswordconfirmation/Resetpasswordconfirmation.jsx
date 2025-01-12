import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import "./Resetpasswordconfirmation.css";

const Resetpasswordconfirmation = () => {
  return (
    <>
      <div className="holder">
        <div className="reset xs:hidden md:hidden">
          <h2>Reset Password</h2>
          <p>Your Password has been Reset Successfully</p>
          <div className="mt-24">
            <div className="btn">
              <button className="button">Continue</button>
            </div>

            <Link to="/Signin">
              <div className="backtologin">
                <FaAngleLeft size={30} />
                <p className="text-xl font-normal">Back to Login</p>
              </div>
            </Link>
          </div>
        </div>

        {/* MOBILE */}

        <div className="reset hidden xs:block md:hidden">
          <div className="flex flex-col justify-center text-center items-center">
            <h2>Reset Password</h2>
            <p>Your Password has been Reset Successfully</p>
          </div>
          <div>
            <div className="flex flex-col justify-center text-center items-center mt-28">
              <button className="bg-primary px-32 py-3 text-white rounded">Cotinue</button>
            </div>
          </div>
        </div>

       
        <div className="reset hidden xs:hidden md:block">
          <h1 className="text-[2.8rem] mt-24">Reset Password</h1>
          <p>Your Password has been Reset Successfully</p>
          <div className="mt-8">
            <div className="but">
              <button className="button">Continue</button>
            </div>

            <Link to="/Signin">
              <div className="backtologin">
                <FaAngleLeft size={30} />
                <p className="text-xl font-normal">Back to Login</p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Resetpasswordconfirmation;
