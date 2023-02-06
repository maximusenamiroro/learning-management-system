import Home from "./pages/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import { React } from "react";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin.jsx";
import Signupbanner from "./components/signup-banner/signupbanner"
import Resetpassword from "./pages/Resetpassword/Resetpassword";
import Resetpasswordconfirmation from "./pages/Resetpasswordconfirmation/Resetpasswordconfirmation.jsx";
import Forgotpassword from "./pages/forgotpassword/Forgotpassword.jsx";
import Checkyouremail from "./pages/checkyouremail/Checkyouremail.jsx";
import Topnav from "./components/Topnav/Topnav.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Topnav" element={<Topnav />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/Checkyourmail" element={<Checkyouremail />} />
        <Route path="/signupbanner" element={<Signupbanner />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Resetpasswordconfirmation" element={<Resetpasswordconfirmation />} />
      </Routes>
    </div>
  );
};
export default App;
