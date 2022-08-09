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

  // gt Category.jsx   []
  // import startAfter firestore  [x]
  // state lastFetchedListing null  [x]
  // inside of usef effect below querySnap, create const lastVisible = querySnap.docs[querySnap.docs.length -1 ]  [x]
  // setLastFechedListing(lastVisible)  [x]
  // copy the funtion only fetchListings  [x]
  // paste outside of useEffect  [x]
  // change name onFetchMoreListings  [x]
  // inside of query parameter, add startAfter pass lastFechedListing  [x]
  // change setListings(prev => [...prv, ... listings])  [x]
// below closing main,  []
  // br / x3  []
  // {lastFetchedListing && ( *insert )}  []
  // p.loadMore cont Load More  onClick = {onFetchMoreLisints}  []
  // change limit 2  in query  []
  // test on browser   []
  // apply to offer   []

  

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
        <br />
        <br />
        <br />
        <br />
  
        <Navbar /> 
      </Router>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
