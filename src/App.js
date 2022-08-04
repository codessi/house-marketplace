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
// 100 [x]
// AIzaSyAJgiur958aOwnWmacCHBPA2yjcN7uB5PI
// gt console.cloud.google.com  [x]
  // gt project -> apis & services [x]
  // enable Geocoding api [x]
  // gt credentials get key save somewhere [x]
  // gt CreateListing.jsx [x]
  // above on submit, setLoading(true) [x]
  // onSubmit insert , if discount is bigger or same as regular {} [x]
  // insert setLoading(false)  toast.error (insert) [x]
  //'Discounted price needs to be less than regular price' [x]
  // return [x]
  // test [x]
  // sibiling, if images.length > 6 {} [x]
  // setLoading(false) toast.error('Max 6 images') return [x]
  // // sibling, let geolocation = {} [x]
  // let location [x]
  // if (geolocationEnabled) {} else {} [x]
  // insert2,  geolocation.lat = latitiude [x]
  // same with longitude [x]
  // location = addresss [x]
  // insert1, const response = await fetch( insert*) [x]
  // `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key= <apikey>` [x]
  // const data = response.json() [x]
  // console.log(data) [x]
  // outside of if else,  setLoading(false) [x]
  // test [x]
  // reaplce console with, geolocation.lat = data.result[0]?.geometry.location.lat  [x]
  // do same with lng  [x]
  // location = data.status ==='ZERO_RESULTS' ? undefined : data.result[0]?.formatted_address  [x]
  // if(location === undefined || location.include('undefined') {})  [x]
  // setLoading(false) toast.error('please enter a correct address')  [x]
  // return  [x]
  // test  [x]
  // below location = address, console.log(geolocation, location)  [x]
  // test  [x]
  // delete console.log,  geolocationEnabled set to true  [x]
  // put the key in env  [x]
  // .env in root  [x]
  // type REACT_APP_GEOCODE_API_KEY =  "<key>"  [x]
  // insert in the fetch  [x]
  // git igrnore   add .env   [x]
  /// restart   [x]
  
  
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
