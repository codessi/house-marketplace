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

// gt profile.jsx from pages  [x]
  // import collection, getDocs, query, where orderBy deleteDoc  [x]
  // useEffect dependancy auth.currentUser.uid  [x]
  //state loading true listings null  [x]
  // insert fetchUserListings = async() => {}  [x]
  // const listingsRef = collection(db, "listings")  [x]
  // const q = query(listingsRef, where('userRef', '===', auth.currentUser.uid), orderbBy('timestamp', 'desc'))  [x]
  // const querySnap = await getDocs(q)  [x]
  // let listings =[]  [x]
  // querySnap.forEach(doc => { })  [x]
  // insert return listings.push({ id:doc.id, data: doc.data()})  [x]
  // setListings(listings)  [x]
  // setLoading(false)  [x]
  // above closein main tag, {!loading && listing?.length > 0 && (<> insert )}  [x]
  // insert p.listingText cont Your Listings  [x]
  // sibl ul.listingList wrap  [x]
  // {listings.map((listing) => (  insert ))}  [x]

  // <listingItem  key= {listing.id} listing={listing.data} id={listing.id} onDelete = {() => onDelete(listing.id)}>  [x]
  // add const onDelete  = () => {}  [x]

  //make it async pass listingId  [x]
  // insert if(window.confirm("Are you sure you want to delete?")){ await deleteDoc(doc(db, 'listing', listingId))insert *}  []
  // const updatedListings = listings.filter((listing) => { insert})  []
  // listing.id !== listingId)  [x]
  // setListings(updateListings)  []
  // toast.success('Successfully delete listing')  []
  // test   []

  

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
