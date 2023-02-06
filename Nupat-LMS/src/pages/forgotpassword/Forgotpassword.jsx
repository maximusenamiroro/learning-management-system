import React from 'react'
import './Forgotpassword.css'
import lock from "../../assets/lock.png"

const Forgotpassword = () => {
    return (
        <div>
            <div className='main'>
                <div className="pt-10  justify-center text-center">
                    <h1 className='text-4xl font-bold text-primary'>Forgot Password ?</h1>
                    <p className='font-medium  pt-4'>No worries , we have you covered</p>
                </div>
                <div class="flex p-2 pt-4 rounded-lg justify-center -center max-w" style={{ margin:'0 auto', width:'50%', display:'flex', flexDirection:'column'}}>
  <form>
    <div class="form-group mb-2"style={{paddingBottom: '4em'}} >
      <input type="email"  required class="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="InputEmail2"
        aria-describedby="email" placeholder=" Email" style={{border: '1px solid black'}}/>
    </div>
   
    <button type="submit" class="
      w-full
       p-6
      py-2.5

      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" >Reset Password</button>
   
  </form>
</div>

            </div>
        </div>
    )
}

export default Forgotpassword