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
import EditListing from "./pages/EditListing";


function App() {

// gt firestore db rules  [x]
  // dulplcate delete rule  [x]
  //  change name to update  [x]
  // create EditListing.jsx  [x]
  // rafce  [x]
  // create route called '/edit-listing/:listingId  [x]
  // gt ListingItems [x]
  // import reactComp as editIcon  [x]
  // add prop onEdit  [x]
  // above closing tag of li, {onEdit && <EditIcon className = "editIcon"  onClick={() => onEdit(id)} />}  [x]
  // gt profile  [x]
  // gt listing.map..., add onEdit = {()=> onEdit(listing.id)}  [x]

  // above return, create const onEdit functino that passing listingId and excute navigate(`/edit-listing/${listingId}`)  [x]

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/:listingId" element={<Listing />} /> 
          <Route path="/edit-listing/:listingId" element={<EditListing />} />

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
