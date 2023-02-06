import React from 'react'
import Bell from "../../assets/bell.png"
import Userpic from "../../assets/userpic.png"

const Topnav = () => {
  return (
    <div>
     <div className='flex text-white text-2xl text-center' style={{justifyContent: 'space-between', background: 'rgba(19, 30, 71, 1)', width: '100%', height: '3em' }}>
        <div className='p-4 ml-4'> UIUX DESIGN</div>
<div className='flex justify-center items-center space-x-10' style={{padding: '1rem'}}>
    <div>
        <img style={{width: '40px'}} src={Bell} alt="notification" />
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
