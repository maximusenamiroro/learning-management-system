import React from 'react'

const Phonenumber = () => {
  return (
    <div>
       <div class="form-group mb-2" >
      <input type="tel"  required class="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputphonenumber"
        aria-describedby="number" placeholder="Phone Number" style={{border:'1px solid black'}}/>
    </div>
    </div>
  )
}

export default Phonenumber
