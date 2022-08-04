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
  // test []
  // sibiling, if images.length > 6 {} []
  // setLoading(false) toast.error('Max 6 images') return []
  // // sibling, let geolocation = {} []
  // let location []
  // if (geolocationEnabled) {} else {} []
  // insert2,  geolocation.lat = latitiude []
  // same with longitude []
  // location = addresss []
  // insert1, const response = await fetch( insert*) []
  // `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key= <apikey>` []
  // const data = response.json() []
  // console.log(data) []
  // outside of if else,  setLoading(false) []
  // test []
  // reaplce console with, geolocation.lat = data.result[0]?.geometry.location.lat ?? 0  []
  // do same with lng  []
  // location = data.status ==='ZERO_RESULTS' ? undefined : data.result[0]?.formatted_address  []
  // if(location === undefined || location.include('undefined') {})  []
  // setLoading(false) toast.error('please enter a correct address')  []
  // return  []
  // test  []
  // below location = address, console.log(geolocation, location)  []
  // test  []
  // delete console.log,  geolocationEnabled set to true  []
  // put the key in env  []
  // .env in root  []
  // type REACT_APP_GEOCODE_API_KEY =  "<key>"  []
  // insert in the fetch  []
  // git igrnore   add .env   []
  /// restart   []
  
  
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
