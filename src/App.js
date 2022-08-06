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


function App() {
 // if loading true spinner [x]
  // jsx on listing [x]
  // main wrap,  .shareIconDiv []
  // onClick funtion with navigator.clipboard.writeText(window.location.href) setShareLinkCopied(true) []
  // setTimout(()=> setSharedLinkeCopied(false), 2000) wrap [x]
  // img src shareIcon [x]

  // sibliing to div, shareLinkedCopy true then jsx p.linkCopied cont Link Copied [x]

  // sibling , .listingDetails wrap []
  // p.listingName wrap {listing.name} - {listing.offer ? listing.discountedPrice: listing.regularPrice} [x]
  // add comma for money [x]
  // sibling, p.listingLocaation wrap {listing.location} []
  // sibiling, p.listingType cont for {listing.type === 'rent' ? "Rent": "Sale"} [x]
  // sibiling {listing.offer && (insert)} [x]
  // p.discountprice  cont ${listing.regularPrice - listing.discountedPrice} discount [x]
  //  sibiling to {list.offer... , ul.listingDetailsList wrap []
  // li  {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'} [x]
  // same for bathroom [x]
  // parking, runished [x]
  // sibling ul, p.listingLocationTitle cont location [x]
  // sibling p,  {auth.currentUser?.uid !== listing.userRef && ( insert* )} []
  // Link to  .primaryButton []
  // to = {`/contact/${listing.userRef}?listingName=${listing.name}&listingLocation=${listing.location}`} [x]

 

  
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
