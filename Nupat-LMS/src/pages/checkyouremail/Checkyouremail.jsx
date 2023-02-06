import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react'


const Checkyouremail = () => {
    return (
        <div>
            <div className='main'>
                <div className="pt-10  justify-center text-center">
                    <h1 className='text-4xl font-bold text-primary'>Check Your Mail</h1>
                    <p className='font-medium  pt-4'>We sent a password reset link to you</p>
                    <p className='font-medium  pt-4'>Didn’t get the mail? Resend</p>
                </div>
                <div class="flex p-2 pt-4 rounded-lg justify-center -center max-w" style={{ margin:'0 auto', width:'50%', display:'flex', flexDirection:'column'}}>
  <form>
    
   
    <button type="submit" class="
      w-full
       p-6
      py-2.5
       mt-5
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded-lg
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" >Reset Password</button>

<Link to="/Signup">
                            <div className='flex justify-center pt-4 text-center items-center'>
                                <FaAngleLeft />
                                <p className="">Back to Login</p>
                                
                            </div>
                        </Link>
   
  </form>
</div>

            </div>
        </div>
    )
}

export default Checkyouremail;
