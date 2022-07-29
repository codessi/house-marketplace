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

// gotod firebase documentaton about auth [x]
// gt sign up [x]
  // import {getAuth, createUserWithEmailAndPassWord, updateProfile} from 'firebase/auth' []
  // imort { db } from firbase.config [x]
  // add onSubmit inside of form tag [x]
  // preventdefault [x]
  // create try catch(error) [x]
  // create async onSubmit function [x]
  // try,  assign auth = getAuth [x]
  //  const userCredential = await createUser... (auth, email, password) [x]
  //const user = userCredential.user [x]
  // updateProfile(auth.currentUser, {displayName: name}) []
  // navigate('/') []
  // catch (error){  const errorCode = error.code; []
    // const errorMessage = error.message;} []

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
