import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore";
import ForgotPasswords from "./pages/ForgotPasswords";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  // instal react-router-dom  [x]  
  // make page folder create below files  [x]  
  // Explore.jsx  [x]  
  // Offers  [x]  
  // Profile  [x]  
  // SignIn  [x]  
  // SignUp  [x]  
  // ForgotPasswords.jsx  [x]  
  // gt app.js  [x]  
  // import BrowserRouter as Router, Routes, Rout   [x]  from ...
  // import all the pages  [x]  
  // crate router routes route wrap  [x]  

  // add path= "/" elements{}  [x]  
// add appropriate endpoints   [x]  
  // check on browser  [x]  


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
      </Router>
    </>
  );
}

export default App;
