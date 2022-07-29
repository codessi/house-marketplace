import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore";
import ForgotPasswords from "./pages/ForgotPasswords";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";


function App() {
// gt signin  [x]
  //import usestate, Link,useNavigate, ArrowRightIcon,  [x]
  // import visibilityIcon  svg  [x]
  // const [showPassword, set.. ] state false  [x]
  // const formData, set... state passing object key email "" password: ""  [x]
  // destructure formData with email and password  [x]
  //add jsx .pageContainer  [x]
  // header wrap [x]
  // p.pageHeader content Welcome Back!  [x]
  //sibling to header, main tag wrap form tag wrap input.emailInput type email   [x]placeholder email id email value {email} onChange onChnage function
  // make onChange function  [x]
  // jsx sibling to input, .passwordInputDiv wrap  [x]
  // input type {showPassword? 'text' :"password"} .passwordInput placeholder   [x]Password id password value password onchange onChange
  // sibling img.showPassword src {visibilityIcon} alt show password  onClick   []call the setShow  previousState !previousState
  // parent of img, sibling , <Link to = '/forgot-password' .forgotPasswordLink   [x]content Forgot Password
  // sibiling, .signInBar wrap p.signInText content Sign In  [x]
  // sibling to p, button.signInButton wrap  [x]
  // ArrowRightIcon fill #ffffff width 34px height 34px  [x]
  // sibling to form, Link to /sign-up  .registerLink  wrap  [x]
  // Sign Up Instead  [x]
  // check  [x]
  // onChange pass e  setFormData pass function pass previousState return   [x]object  ...previousState, key [e.target.id] value e.target.value
  // check dev tool  [x]

  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-passwords" element={<ForgotPasswords /> } />
        </Routes>
        <Navbar /> 
      </Router>
    </>
  );
}

export default App;
