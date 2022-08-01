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


function App() {

  // gt profile [x]
  // import {updateDoc} [x]
  // db import  from config [x]
  // state changeDetails set false []
  // jsx  under header sibliing, main wrap [x]
  // .profileDetailsHeader [x]
  // p.profileDetailsText  content Personal Details [x]
  // sibling p.changePersonalDetails cont {changeDetails?"done": "change"} add onclick () => {changeDetail &&  [x]onSubmit()  setChangeDetails((prevState) => !prevState)}
  // const onSubmit  console.log(123) [x]
  // above main closing tag ,  .profileCard wrap [x]
  // form  wrap []
  // input type text id name  class {!changeDetails ? 'profileName' : 'profileNameActive'}  add disabled=  []{!changeDetails}   value = {name } onChange={onChange}
  // const onChange  setFormData(pre => ({ ...pre, [e.target.id ]: e.target.value, })) [x]

  // copy input [x]
  // paste below [x]
  // change to email [x]
  // gt onSubmit [x]
  // try catch [x]
  // if (auth.currentUser.displayName !== name) { // update display nmae in FB} [x]
  // await updateProfile(auth.currentUser, {displayName: name }) [x]
  // userRef = doc() [x]
  // pass db, 'users', auth.currentUser.uid [x]
  // bring in doc from firestore [x]
  // await updateDoc(useRef, {name,}) [x]
// bring toast [x]
  //toast.error ("Could not update profile details") [x]
  // console error [x]
  // test on broser click change []
  // check  update on firestore []
  //  []
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
      <ToastContainer />
    </>
  );
}

export default App;
