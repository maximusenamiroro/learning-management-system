import React from "react";
import Signupbanner from "../../components/signup-banner/signupbanner";
import "../../components/signup-banner/signupbanner.css";
import Emailinput from ".././../components/inputs/Emailinput/Emailinput";
import Passwordinput from "../../components/inputs/Password/Passwordinput";
import Signinbuttons from "../../components/Buttons/Signinbuttons/Signinbuttons";

const signin = () => {
  return (
    <div className="h-full flex">
      <div style={{ width: "30%" }}>
        <Signupbanner />
      </div>
      <div style={{ width: "70%" }}>
        <div className="">
          <div className="pt-10  justify-center Start pl-20">
            <h1 className="text-3xl font-bold text-primary">Sign in</h1>
          </div>

          <div className="flex justify-center text-center">
            <div class="flex p-2 rounded-lg justify-center max-w m-0 w-10/12 flex-col">
              <form>
                <Emailinput />

                <Passwordinput />

                <Signinbuttons />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
