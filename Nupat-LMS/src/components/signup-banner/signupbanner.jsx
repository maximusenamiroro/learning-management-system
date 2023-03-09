import React from "react";
import logo from "../../assets/logo.svg"
import banner from "../../assets/banner.png"

const Signupbanner = () => {
    return (
        <div className="bg-primary rounded-lg py-1" style={{height: '100vh'}}>
            <div className="contain h-screen rounded-2xl ">
                <div className="logo">
                    <img class="ml-5" src={logo} alt="Logo" />

                </div>
                    
                <div className="learn">
                    <h2 className="text-3xl font-semibold text-white w-11/12 ml-8">Learn a Tech Skill With Nupat Technologies</h2>
                    <p className="font-semibold  text-white ml-8" >Start Your Tech journey with us </p>
                </div>

                <div className="picholder">

                    <div className='mt-10 justify-center ml-4 w-10/12'>
                        <img className="rounded-full"  src={banner} alt="" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signupbanner