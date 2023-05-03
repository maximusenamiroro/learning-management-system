import React from 'react'
import Bell from "../../assets/Bell.svg"
import Userpic from "../../assets/userpic.png"

const Topnav = () => {
  return (
    <div>
     <div className='flex text-white text-2xl text-center justify-between w-full h-20' style={{ background: 'rgba(19, 30, 71, 1)'}}>
        <div className='p-4 ml-4'> UIUX DESIGN</div>
<div className='flex justify-center items-center space-x-10 p-10'>
    <div>
        <img className='w-[40px]' src={Bell} alt="notification" />
    </div>
    <div className='flex space-x-10 pr-4'>
        <div>
        <img src={Userpic} alt="notification" />
        </div>
        <div>Name Surname</div>
    </div>
</div>
     </div>
    </div>
  )
}

export default Topnav
