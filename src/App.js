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
import Category from "./pages/Category";
import CreatingListing from "./pages/CreatingListing";


function App() {
  // what are we doing?  making a listing page
// before  we are making ... 
// createListing.jsx in pages   [x]
// bring in to app   [x]
  // route with /create-listing  with element ...   [x]
  // gt profile.jsx   [x]
  // import arrowRight   [x]
  // import homeIcon   [x]
  // jsx above main closing, insert <Link to '/create-listing class createListing wrap   [x]
  // img src homeIcon home   [x]
  // sibling p cont Sell or rent your home   [x]
  // img src arrowRight   [x]
  // import Link   [x]
  // gt createListing.jsx   [x]
  // import useState   [x]
  // formData state pass obj  type rent name '' bedrooms;  copy from repo   [x]
  // state geolocationEnabled  true   [x]
  // useEffect   [x]
  // getAuth, onAuthStateChanged   [x]
  // useNavigte, ref   [x]
  // initial auth navigate isMounted   [x]
  // useEffect,  add isMounted conditional   [x]
  // insert onAuthStateChanged(auth, user => {})   [x]
  // if user setFormData combine previous and add  userRef: user.uid   [x]
  // else navigate('/sign-in')   [x]
// check dev tool   []
  // state loading false   [x]
  // add contional outside of useEffect, if loading  spinner   []
  //    []
  
  


  



  
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />}/>
          <Route path="/profile" element={<PrivateRoute/>} >
            <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route path="/create-listing" element={<CreatingListing/> } />
          
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
