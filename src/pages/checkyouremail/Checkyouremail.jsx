import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
const style = { color: "black", fontSize: "1.3em", fontWeight: "lighter"};

const Checkyouremail = () => {
  return (
    <>
      <div className="main md:hidden xs:hidden">
        <div className="pt-10  justify-center text-center">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            Check Your Mail
          </h1>
          <p className=" text-xl pt-4">We sent a password reset link to you</p>
          <p className=" text-xl pt-4">Didn’t get the mail? <span className=" underline"><Link to="/resetpassword"> Resend</Link></span></p>
          <p className=" text-xl pt-4">Kindly Enter your Email address</p>
        </div>

        <div className="flex justify-center text-center mt-1">
          <div class="flex p-2 pt-4 rounded-lg justify-center text-center max-w m-0 ">
            <form>
              <button
                type="submit"
                class="
                        w-full
                         p-6
                         px-64
                        py-3.5
                         mt-5
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        rounded-lg
                        shadow-md
                        bg-primary
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
                <div className="flex justify-center pt-2 text-center items-center">
                  <FaAngleLeft style={style} />
                  <p className=" font-semibold">Back to Login</p>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>

                                    {/* MOBILE */}
                                    
                                  
                                    <div className="main hidden xs:block">
        <div className="pt-28  justify-center text-center">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            Check Your Mail
          </h1>
          <p className=" text-xl pt-4 font-medium">We sent a password reset link to you</p>
          <p className=" text-xl pt-1 font-medium">Didn’t get the mail? <span className=" underline"><Link to="/resetpassword"> Resend</Link></span></p>
          <p className=" text-xl pt-1 font-base">Kindly Enter your Email address</p>
        </div>

        <div className="flex justify-center text-center mt-1">
          <div class="flex p-2 pt-4 rounded-lg justify-center text-center max-w m-0 ">
            <form>
              <button
                type="submit"
                class="
                        w-full
                         p-6
                         px-32
                        py-3.5
                         mt-5
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        rounded-lg
                        shadow-md
                        bg-primary
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
                <div className="flex justify-center pt-2 text-center items-center">
                  <FaAngleLeft style={style} />
                  <p className=" font-semibold">Back to Login</p>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>       
                         {/* Tablet */}

       <div className="main hidden xs:hidden md:block">
        <div className="pt-10  justify-center text-center">
          <h1 className="text-4xl font-bold text-primary tracking-wide">
            Check Your Mail
          </h1>
          <p className=" text-2xl pt-10">We sent a password reset link to you</p>
          <p className=" text-2xl pt-4">Didn’t get the mail? <span className=" underline"><Link to="/resetpassword"> Resend</Link></span></p>
          <p className=" text-2xl pt-4">Kindly Enter your Email address</p>
        </div>

        <div className="flex justify-center text-center mt-1">
          <div class="flex p-2 pt-4 rounded-lg justify-center text-center max-w m-0 ">
            <form>
              <button
                type="submit"
                class="
                        w-full
                         p-6
                         px-64
                        py-3.5
                         mt-5
                        text-white
                        font-medium
                        text-xl
                        leading-tight
                        rounded-lg
                        shadow-md
                        bg-primary
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
                <div className="flex justify-center pt-2 text-center items-center">
                  <FaAngleLeft style={style} />
                  <p className=" text-xl font-semibold">Back to Login</p>
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
