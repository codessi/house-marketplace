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

  //signInWithEmailAndPassword , getAuth  - import     []
  // at form submit  onSubmit    []
  // make const onSubmit asyn  prevent    []
  //  initalize auth with getAuth    []
  // userCreditial promise    []
  // contitial if useCrediential.use exist then naviate('/')    []
  // insert in try catch    []
  // catch error with console.log(error)    []
  // wrong pass word enter to test and correct one too    []
  // goto app.js change .. to /profile    []

  // gt profile.jsx    []
  // import {getAuth},  useEffect    []
  // initlaize auth    []
  // useEffect () insert console.log(auth.currentUser)    []
  // import useState    []
  // state user  set as null    []
  // jsx  return user ternary h1 user.displayName : "not logged in"    []
  // dev tool -> application indexDB  check     []
  // clear firebase local as log out     []


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
