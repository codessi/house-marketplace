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


function App() {

  //create ListingItem.jsx under component  [x]
  // rafce  [x]
  //import Link    DeleteIcon as component  bedicon bethtub  [x]
  // destrured listing and id  pass as prop  [x]
  //  jsx li.categoryListing wrap  [x]
  // Link to '/category/${listing.type}/${id} .categoryListingLink  [x]
  // img src listing.imageUrls[0] alt listing.name  class categoryListingImg  [x]
  // gt catagory.jsx  [x]
  // import ListingItem  compoenet  [x]
  // in ul , listings.map((listing) => (insert*))  [x]
  // insert <ListingItem listing = {listing.data} id= {listing.id} key ={listing.id}  [x]
  // gt listingItem  [x]
  // under img, .categoryListingDetails wrap  []
  // p.categoryListingLocation wrap  [x]
  // {listing.location}  [x]
  // sibliing p.categoryListingName wrap {listing.name}  [x]
  // sibling p.categoryListingPrice wrap ${lsiting.offer? listing.dicountedPrice: listing.regularPrice}  [x]
  // convert to string, and replace  - find regex that insert comma for money  [x]
  // sibleing  {listing.type === 'rent' && ' / Month'}  [x]
  // sibling to p, .categoryListingInfoDiv wrap  [x]
  // img src bedicon bed  [x]
  // sibiling, p.categoryListingInfoText wrap  [x]
  // {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}  [x]
  // sibling p,  img src bathtubIcon  [x]
  // sibling to img, p.categoryListingInfoText wrap  [x]
  // copy {listing...} replace bed to bath  [x]
  // pass prop onDelete  []
  // above li closing tag, add {onDelete && ( )}  []
  // <DeleteIcon className = 'removeIcon' fill= 'rgb(231,76,60)' onClick = {() => onDelete(listing.id, listing.name)}  [x]
  // 

  


  
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
