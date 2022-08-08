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
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";


function App() {

  // npm i swiper@6.8.1  [x]
  // gt listing.jsx  [x]
  // import swiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper'  [x]
  // import {Swiper, SwiperSlide} from 'swiper/react'  [x]
  // import 'swiper/swiper-bundle.css'  [x]
  // jsx under main opening, Swiper and  [x]
  // add slidesPerView = {1} pagination={{clickable: true}} wrap  [x]
  // {listings.imgUrls.map  [x]
  // pass url, index  [x]
  // insert jsx  <SwiperSlide with key={index} wrap  [x]
  // div with style ={{}}  [x]
  // background:  template literal -> url from imgUrls[] center no-repeat , backgroundSize: cover   [x]
  // .swiperSlideDiv  [x]
  // check   [x]
  // gt top, SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])  []

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/:listingId" element={<Listing/>} /> 

          <Route path="/profile" element={<PrivateRoute/>} >
            <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route path="/create-listing" element={<CreatingListing />} />
          
          <Route path="/contact/:landlordId" element = {<Contact />} />
          
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-passwords" element={<ForgotPasswords /> } />
        </Routes>
        <Navbar /> 
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
