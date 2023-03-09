import React from 'react'
import "../../../app.css"
import Logo from "../Components/Nupatlogo.png"
import Backgroundimge from "../Components/Makepaymentimg.png"
import Visa from "../Components/Visa.svg"
import Cardname from '../Components/inputs/Cardname/Cardname'
import Cardnumber from '../Components/inputs/Cardnumber/Cardnumber'
import Expirationdate from '../Components/inputs/Expiration/Expirationdate'
import Cvc from '../Components/inputs/CVC/Cvc'

const Makepayment = () => {
  return (
    <>
    
    <div className="w-10/12 mx-auto">

         {/* navheader */}
<div className='flex justify-between '>
            <div><img className='h-24' src={Logo} alt=""/></div>
            <div className='flex gap-5 mt-4 items-center'>
                <button className='px-8 h-12 rounded-lg text-lg bg-transparent border-none font-medium'>Log Out</button>
            </div>
        </div>

        <div className='Card w-9/12'>
        <div className='Details'>
<div className=''>
    <div>
        <img src={Visa} alt="Visa" />
    </div>



    <div>
        <Cardname/>
        <Cardnumber/>
        <Expirationdate/>
        <Cvc/>
    </div>




</div>

</div>
            
            
        </div>

      

    </div>
    
    </>
  )
}

export default Makepayment