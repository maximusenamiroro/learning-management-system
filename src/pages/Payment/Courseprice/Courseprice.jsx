import React from 'react'
import Logo from "../Components/Nupatlogo.png"
import "../../../app.css"
import Coursepic from "../Components/Coursepic.svg"
import Button from "../Buttons/Buttons";

const Courseprice = () => {
  return (
    <>
    <div className=' w-9/12 m-auto mb-8'>

        {/* navheader */}
        <div className='flex justify-between '>
            <div><img className='h-24' src={Logo} alt=""/></div>
            <div className='flex gap-5 mt-4 items-center'>
                <ul className='flex gap-6'>
                <li><a href="">Courses</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Communities</a></li>
                </ul>
                <button className='px-8 h-12 rounded-lg text-lg font-normal text-white'>Log Out</button>
            </div>
           
        </div>

         {/* BODY */}

       <div className='mt-16'>


           {/* Toggle */}
<div className='flex items-center justify-end pb-2'>
  <p className=' text-base font-bold'>NGN  </p>
  <div className=' px-2'>
  <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
  </div>
<p className="text-base font-bold">USD</p>
</div>


     <div className='base rounded-lg'>

    <div className='flex justify-between w-10/12 mx-auto py-4'>
      <p className='text-lg font-semibold text-white'>Track</p>
      <p className='text-lg font-semibold text-white'>Price(USD)</p>
    </div>

    <hr/>

    <div className=''>
      <div className="flex justify-between w-10/12 mx-auto h-30 py-4">
      <div className='text-white flex '>
        <div>
        <img src={Coursepic} alt="" />
        </div>
        <div className=' ml-2'>
        <p className='text-lg font-medium'>UIUX Design</p>
        <p>Start date : October 1, 2022</p>
        </div>
      </div>
      <div className='text-white font-medium '>$ 200.00</div>
      </div>
     </div>

      <hr/>

      <div className='h-20'>

      </div>

      <hr/>

      <div className='h-40'>

</div>

 

     </div>

   


       </div>
       <Button/>


    </div>
    </>
  )
}

export default Courseprice