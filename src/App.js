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
 // goto rule change imgUrls & data base  [x]
  // gt createListing.jsx  [x]
  // import addDoc, collection, serverTimestamp  [x]
  // inside of submit, above setLoading(false), const formDataCopy = {...formData, imgUrls, geolocation, timestamp: serverTimestamp() }  [x]
  
  // delete formDataCopy.images  [x]
  // delete formDataCopy.address  [x]
  // location && (formDataCopy.location = location )  [x]
// !formDataCopy.offer && delete formDataCopy.discountedPrice   [x]
  
 // const docRef == awiat add(collection(db,'listing'), formDataCopy)  [x]
  // setLoading(false)  [x]
  // toast.success  [x]
  // navigate(`/category/${formDataCopy.type}/${docRef.id}`)  [x]

  // get json and add some data & image from resource  []




  
  
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
