import React from 'react'
import './Resetpassword.css'
import lock from "../../assets/lock.png"
import Resetpasswordinput from '../../components/inputs/Resetpasswordinput/Resetpasswordinput'
import Button from './Button/button'
const Resetpassword = () => {
    return (
        <div>
            <div className='main'>
                <div className="pt-10  justify-center text-center">
                    <h1 className='text-4xl font-bold text-primary'>Reset Password</h1>
                    <p className='font-medium '>Your New Password must be different from the previously used passswords</p>
                </div>
                <div class="flex p-2 rounded-lg justify-center -center max-w" style={{ margin:'0 auto', width:'50%', display:'flex', flexDirection:'column'}}>
  <form>



    <Resetpasswordinput />
      
    <Resetpasswordinput />

    <div class="flex justify-between items-center mb-6">
      
      
    </div>
    <Button />
  </form>
</div>

            </div>
        </div>
    )
}

export default Resetpassword