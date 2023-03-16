import React from 'react'
import "../../../pages/signup/Signup.css"

const Names = () => {
  return (
    <div>
      <div class='flex space-x-3'>
  <div class="form-group mb-2 w-6/12">
      <input type="text"  required class="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        aria-describedby="emailHelp" placeholder=" First name" style={{border: '1px solid black'}}/>
    </div>
    <div class="form-group mb-2 w-6/12">
      <input type="text"  required class="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-primary
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-md
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
        aria-describedby="emailHelp" placeholder=" Last name" style={{border:'1px solid black'}}/>
    </div>
</div>
    </div>
  )
}

export default Names
