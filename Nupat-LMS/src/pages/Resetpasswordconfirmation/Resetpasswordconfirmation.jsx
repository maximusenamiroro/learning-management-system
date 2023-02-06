import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react'
import "./Resetpasswordconfirmation.css"

const Resetpasswordconfirmation = () => {
    return (
        <div> 
            <div className='holder'>
                <div className='reset'><h2>Reset Password</h2>
                    <p>Your Password has been Reset Successfully</p>
                    <div>
                        <div className='btn'><button className='button'>Continue</button></div>

                        <Link to="/Signup">
                            <div className='backtologin'>
                                <FaAngleLeft />
                                <p>Back to Login</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Resetpasswordconfirmation;
