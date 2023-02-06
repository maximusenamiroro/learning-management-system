import React from "react";
import logo from "../../assets/logo.svg"
import banner from "../../assets/banner.png"

const Signupbanner = () => {
    return (
        <div className="h-screen bg-primary rounded-lg py-1 w-[10%]">
            <div className="contain h-screen rounded-2xl ">
                <div className="logo">
                    <img class="ml-5" src={logo} alt="Logo" />

                </div>

                <div className="learn">
                    <h2 className="text-3xl font-semibold text-white" style={{width: '90%', marginLeft: '30px'}}>Learn a Tech Skill With Nupat Technologies</h2>
                    <p className="font-semibold  text-white" style={{marginLeft: '30px'}}>Start Your Tech journey with us </p>
                </div>

                <div className="picholder">

                    <div className='mt-10' style={{justify: 'center', marginLeft: '10px', width:'80%' }}>
                        <img className="rounded-full"  src={banner} alt="" />

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Signupbanner