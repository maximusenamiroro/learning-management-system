import Home from "./pages/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { React } from "react";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin.jsx";
import Signupbanner from "./components/signup-banner/signupbanner";
import Resetpassword from "./pages/Resetpassword/Resetpassword";
import Resetpasswordconfirmation from "./pages/Resetpasswordconfirmation/Resetpasswordconfirmation.jsx";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword.jsx";
import Checkyouremail from "./pages/checkyouremail/Checkyouremail.jsx";
import Courseprice from "./pages/Payment/Courseprice/Courseprice.jsx";
import Paymentsuccessful from "./pages/Payment/Paymentsuccessful";
import Makepayment from "./pages/Payment/Courseprice/Makepayment.jsx";
import Paidcourse from "./pages/Payment/Courseprice/Mypaidcourse.jsx"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Checkyouremail" element={<Checkyouremail />} />
        <Route path="/signupbanner" element={<Signupbanner />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Resetpasswordconfirmation" element={<Resetpasswordconfirmation />} />
        <Route path="/Courseprice" element={<Courseprice />} />
        <Route path="/Paymentsuccessful" element={<Paymentsuccessful />} />
        <Route path="/Makepayment" element={<Makepayment />} />
        <Route path="/Paidcourse" element={<Paidcourse />} />
      </Routes>
    </div>
  );
};
export default App;
