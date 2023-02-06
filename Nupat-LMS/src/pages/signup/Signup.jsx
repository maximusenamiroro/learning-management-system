import React from 'react'
import Signupbanner from '../../components/signup-banner/signupbanner'
import Emailinput from '../../components/inputs/Emailinput/Emailinput';
import Phonenumberinput from '../../components/inputs/Phonenumber/Phonenumber'
import { Link } from 'react-router-dom';
import './signup.css'
import '../signup/Signup.css'
import Passwordinput from '../../components/inputs/Password/Passwordinput';
import Confirmpassword from '../../components/inputs/Confirmpassword/Confirmpassword';
import Signupbutton from '../../components/Buttons/Signupbuttons/Signupbutton';
import Names from '../../components/inputs/Names/Names';


const signup = () => {
  return (
    <div className="App w-full">
      <div className='h-full w-full flex'>
      <div className='w-'>
        <Signupbanner />
      </div>
      <div className='absolute top-0 right-0' style={{ width: '70%' }}>
        <div className=''>
          <div className="pt-10  justify-center Start pl-20">
            <h1 className='text-3xl font-bold text-primary'>Sign up</h1>

          </div>
          <div class="flex p-2 rounded-lg justify-center -center max-w" style={{ margin: '0 auto', width: '80%', display: 'flex', flexDirection: 'column' }}>
            <form>
              <Names />

              <Emailinput />

              <Phonenumberinput />

              <Passwordinput />

              <Confirmpassword />

              <div className=''>
                <p>By signing up, you have agreed to
                  <Link to="/" style={{ color: "blue" }}> Terms of Services </Link> and <Link to="/" style={{ color: "blue" }}> Privacy Polices</Link>. We will also subscribe you to our news letter.You can unsubscribe at anyime</p>
              </div>

              <Signupbutton />

              <p class="text-gray-800 mt-6 text-center">Already have an account? <a href="#!"
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"> <Link to="/signin"> Sign in</Link></a>
              </p>
            </form>
          </div>

        </div>
      </div>
      </div>
    </div>

  )
}

export default signup
