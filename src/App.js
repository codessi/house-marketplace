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

  //signInWithEmailAndPassword , getAuth  - import     [x]
  // at form submit  onSubmit    [x]
  // make const onSubmit asyn  prevent    [x]
  //  initalize auth with getAuth    [x]
  // userCreditial promise    [x]
  // contitial if useCrediential.use exist then naviate('/')    [x]
  // insert in try catch    [x]
  // catch error with console.log(error)    [x]
  // wrong pass word enter to test and correct one too    [x]
  // goto app.js change .. to /profile    [x]

  // gt profile.jsx    [x]
  // import {getAuth},  useEffect    [x
  // initlaize auth    [x]
  // useEffect () insert console.log(auth.currentUser)    [x]
  // import useState    [x]
  // state user  set as null    [x]
  // jsx  return user ternary h1 user.displayName : "not logged in"    [x]
  // dev tool -> application indexDB  check     [x]
  // clear firebase local as log out     [x]


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
