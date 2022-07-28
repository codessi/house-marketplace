import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore";
import ForgotPasswords from "./pages/ForgotPasswords";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {

//inside of Router, 
  // make folder components
  // Navbar.jsx
  // import {useNavigate, useLocation}
  // import {ReactComponent as OfferIcon} from .. localOfferIcon.svg
  // copy 2 more Explore
  // and PersonOutline
  // jsx footer.navbar wrap
  // nav.navbarNav wrap
  // ul.navbarListItems wrap
  // li.navbarListItem wrap
  // <ExploreIcon fill='#2c2c2c' width='36px' height='36px' />
  // sibling to Expl. , p content Explore
  // copy twice
  // 2nd  Offer
  // 3rd  PersonOutline p Profile
  // gt app.js
  // import navbar
  // insert bottom before closing Router.
  //  check
  // initalize useNavigate() as navigate
  // useLocation same as above
  // li 1st onClick  function envoke navigate passing '/'
  // Offer
  // Profile
  // create const pathMatchRoute  pass route  if route equal to location.pathname  return true
  // change fill pathMatchRoute('/')?  #2c2c2c : #8f8f8f
  // p add class {pathMatchRoute('/')? 'navbarListItemNameActive': 'navbarListItemName'}
  // do the rest 

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
