import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore";
import ForgotPasswords from "./pages/ForgotPasswords";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";


function App() {

// gt forgot pass  [x]
  // import useState   Link getAuth sendPasswordResetEmail  [x]
  //  import toast  ArrowRightIcon as component  [x]
  //  const onChange, onSubmit,  [x]
  // state email set ''  [x]
  // .pageContainer wrap  []
  // header wrap p.pageHeader  cont Forgot Password  [x]
  // sibling to header, create main wrap form wrap with onSubmit  wrap input.emailInput type email placeholder 'email' id email value {email} onChange  [x]
  // siblig <Link to = '/sign-in'  class forgetPasswordLink cont Sign In  [x]
  // sibling .signInBar wrap signInText cont Send Reset Link  [x]
  // sibling button.signInButton wrap  [x]
  // ArrowRightIcon fill white width 34 px height 34px  [x]
  // onSubmit  try catch  [x]
  // onChange  setEmail(e.target.value)  [x]
  // auth initial  [x]
  // try  insert await sendPass... pass auth, email  [x]
  // toast.success ("email sent")  [x]
  // toast.error('Could not send reset email')  [x]
  // check browser   [x]
  // add johansuh@gmail.com   [x]
  // check email  [x]
  


  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<PrivateRoute/>} >
            <Route path="/profile" element={<Profile/>} />
          </Route>
          
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-passwords" element={<ForgotPasswords /> } />
        </Routes>
        <Navbar /> 
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
