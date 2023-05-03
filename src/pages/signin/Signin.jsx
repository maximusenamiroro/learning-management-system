import React from "react";
import { Link } from "react-router-dom";
import Signupbanner from "../../components/signup-banner/signupbanner";
import "../../components/signup-banner/signupbanner.css";
import Emailinput from ".././../components/inputs/Emailinput/Emailinput";
import Passwordinput from "../../components/inputs/Password/Passwordinput";
import Signinbuttons from "../../components/Buttons/Signinbuttons/Signinbuttons";

const signin = () => {
  return (
    <div className="h-full w-full flex xs:block">
      <div className="h-10 grid grid-cols-1">
        <Signupbanner />
      </div>
      <div className="w-full ml-20 xs:hidden">
        <div className="">
          <div className="pt-10  justify-center pl-24">
            <h1 className="text-3xl font-bold text-primary">Sign in</h1>
          </div>

          <div className="flex justify-center text-center">
            <div class="flex p-2 rounded-lg justify-center max-w m-0 w-10/12 flex-col">
              <form>
                <Emailinput />

                <Passwordinput />
                <div className="flex justify-between ">
                  <div>
<input type="checkbox" name="Remember me" id=""  />
<label htmlFor="">Remember me</label>
</div>
<div className="text-red-700">
  <Link to="/">Forgot Password?</Link>
</div>
</div>
                <Signinbuttons />


                
              </form>
              <p class="text-gray-800 mt-6 text-center">
              Do not have an account? {" "}
                    <a
                      href=""
                      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      <Link to="/signup"> Sign Up</Link>
                    </a>
                  </p>
            </div>
          </div>
        </div>
      </div>

                {/* mobile */}


      <div className="w-full mt-32  hidden xs:block">
        <div className=" flex flex-col justify-center">
          <div className="mt-14  justify-center ml-10">
            <h1 className="text-3xl font-bold text-primary">Sign in</h1>
          </div>

          <div className="flex justify-center text-center">
            <div class="flex p-2 rounded-lg justify-center max-w m-0 w-10/12 flex-col">
              <form>
                <Emailinput />

                <Passwordinput />
                <div className="flex justify-between ">
                  <div>
<input type="checkbox" name="Remember me" id=""  />
<label htmlFor="">Remember me</label>
</div>
<div className="text-red-700">
  <Link to="/">Forgot Password?</Link>
</div>
</div>
                <Signinbuttons />


                
              </form>
              <p class="text-gray-800 mt-6 text-center">
              Do not have an account? {" "}
                    <a
                      href=""
                      class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      <Link to="/signup"> Sign Up</Link>
                    </a>
                  </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default signin;
