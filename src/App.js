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

// gt leefletjs.com   [x]
  // start guide tutorial  [x]
  // get css link  [x]
  // insert index. html  [x]
  // npm i install leaflet react-leaflet  [x]
  // gt listing.jsx  [x]
  // import MapContainer Marker Popup TileLayer from react-leaflet  [x]
  // check browser  []

  // gt p.listingLocationTitle , sibling add,  .leafletContainer wrap  [x]
  // <MapContainer style = {{heigt: '100%', width: '100%'}} center={[listing.geolocation.lat, listing.geolocation.lng] zoom ={13} scrollWheelZoom ={false}} wrap  [x]
  // <TileLayer attribution = '&copy; <a href="http://osm.org/copyright"> OpenStreetMap <a/> contributors' url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png />   https://  react-leaflet.js.org/  [x]

  // sibling, <Marker position = { [listing.geolocation.lat, listing.geolocation.lng] }  wrap  [x]
  // <Popup>{listing.location} wrap  [x]
  //   []
  
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
