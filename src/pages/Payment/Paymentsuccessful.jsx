import React from 'react'
import Logo from "./Components/Nupatlogo.png"
import Backgroundimg from "./Components/Successfullbackground.svg" 

const Paymentsuccessful = () => {
  return (
    <>

<div className='w-10/12 mx-auto'>

{/* navheader */}
<div className='flex justify-between '>
            <div><img className='h-24' src={Logo} alt=""/></div>
            <div className='flex gap-5 mt-4 items-center'>
                <button className='px-8 h-12 rounded-lg text-lg bg-transparent border-none font-medium'>Log Out</button>
            </div>
           
        </div>

                         <div className='flex justify-center'>
                            <img src={Backgroundimg} alt="" />
                         </div>


</div>
    
    </>
  )
}

export default Paymentsuccessful