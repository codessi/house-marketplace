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
 
  // npm  react-toastify [x]
  // gt npm [x]
  // import {ToastContainer} [x]
  // import 'react-toastify/dist/ReactToastify.css" [x]
  // insert insert after Router [x]
  // gt  signin [x]
  //import {toast} [x]
  // insert toast.error('Bad User Credientials') in error [x]
  // do same with sign up with "Something went wrong with  []registration"
  //  []
  // 

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
