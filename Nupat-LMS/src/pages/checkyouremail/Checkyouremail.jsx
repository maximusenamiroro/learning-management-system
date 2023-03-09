import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
const style = { color: "red", fontSize: "1.3em" };

const Checkyouremail = () => {
  return (
    <>
      <div className="main">
        <div className="pt-10  justify-center text-center">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            Check Your Mail
          </h1>
          <p className=" text-xl pt-4">We sent a password reset link to you</p>
          <p className=" text-xl pt-4">Didn’t get the mail? Resend</p>
        </div>

        <div className="flex justify-center text-center">
          <div class="flex p-2 pt-4 rounded-lg justify-center text-center -center max-w m-0 ">
            <form>
              <button
                type="submit"
                class="
                        w-full
                         p-6
                         px-64
                        py-2.5
                         mt-5
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        rounded-lg
                        shadow-md
                        hover:bg-primary hover:shadow-lg
                        focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out"
              >
                Go to your Email
              </button>

              <Link to="/Signup">
                <div className="flex justify-center pt-4 text-center items-center">
                  <FaAngleLeft style={style} />
                  <p className="">Back to Login</p>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkyouremail;
