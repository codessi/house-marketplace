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

// gt edit listing jsx  [x]
  // gt createListing  [x]
  // paste  [x]
  // replace create with edit and Edit  [x]
  // import do and updateDoc getDoc  [x]
  // state listing  [x]
  // add another useEffect  []
  // pass function excute  setloading(true)  []
  // const fetchListing = async() => { }  [x]
  // docRef = doc(db, 'listings',params.listingId)  [x]
  // import and inital params  [x]
  // const docSnap = await getDoc(docRef)  [x]
  // if docSnap.exists() {*}  [x]
  // insert, setListing(docSnap.data())  [x]
  // setLoading(false)  [x]
  // else { navigate{'/'} toast.error('Listing does not exist')}  [x]
  // check components  [x]
  // inside of if docSnap... , setFormData({...docSnap.data(), address: docSnap.data().location})  [x]
  // add another useEffect(() => {*})  [x]
  // insert if listing && listing.userRef !== auth.currentUser.uid  [x]
  // excute toast.error("You can not edit that listing")  [x]
  // navigate('/' )  [x]
  // gt onsubmit gt const docRef and delete addDoc colletion  [x]
  // create docRef = doc(db, 'listings', params.listingId)  [x]
  // await updateDoc(docRef, formDataCopy)  [x]
  // delete unused imports  []
  // test with new  [x]
  // gt slider.jsx  [x]
  // above loading, if(lisings.length === 0){return <> </>}  [x]

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
