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

// create Listing.jsx in page folder  [x]
  // rafce  [x]
  // gt app  [x]
  // bring in listing.jsx  [x]
  // add route path category/:categoryName/:lstingId  element listing  [x]
  // gt listing jsx [x]
  // useState effect Link useNavigate useParams  [x]
  // getDoc doc from firestore  [x]
  // getAuth from  [x]
  // db  spinner shareIcon  [x]
  // state listing, loading,  shareLinkCopied   set null all three  [x]
  // initalize navigate params auth  [x]
  //  useEffect  [x]
  // fetchListing  async  [x]
  // docRef doc db, 'listings, params.listingId  [x]
  // const docSnap  await getDoc passing docRef  [x]
  // if(docSnap file exists console the docSnaps data()  [x]
  // and update listing state with data  [x]
  // setLoading to false  [x]
  // setloaindg default to true  [x]
  // set shareLinke copied default false  [x]
  // dependancy of useEffect navigate, params.listingId  [x]
  
  
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
