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

  // make compoenet Slider.jsx[x]
  // rafce[x]
  // gt explore[x]
  // import and insert below main opening tag[x]
  // gt slider[x]
  // import state effect navigate[x]
  // collection getDocs, query, orderBy, limit firestore[x]
  // db[x]
  // swiper stuff -copy from listing[x]
  // spinner[x]
  // state loading true listings null[x]
  // initialize navigate[x]
  // useEffect(() => {}, [])[x]
  // insert collection passing db and 'listings'  assign const listingsRef[x]
  // const q assign query (listingRef, orderBy('timestamp', 'desc'), limit(5))[x]
  // const querySnap = await getDocs(q)[x]

  // let listings = [][x]
  // querySnap.forEach(doc => listings.push(insert *))[x]
  // {id: doc.id, data: doc.data()}[x]
  // sibling, setListings(listings) setLoading(false)[x]
  // wrap everything inside of effect,  const fetchListings[x]
  // call fetchListings[x]
  // console.log(listing)[x]
  // check[x]
  // if(locading) <Spinner />[x]
  // return  listing && (insert*)[x]
  // insert <> wrap[]
  // .exploreHeading cont Recommended[x]
  // sibling, <Swiper ...  refer to listing.jsx[x]
  //  add SwiperSlide onClick={() => navigate(`/category/${data.type}/${di}`)}[]
  // sibling to map, .swiperSlideDiv style ={{background: `url(${data.imgUrls[0]}) center no-repeat`, backgroundSize: 'cover' }} wrap [x]
  // p.swiperSlideText cont data.name[x]
  // sibling p.swiperSlidePrice cont  ${data.discountedPrice ?? data.regularPrice}[x]
  // sibiling, {data.type === 'rent' && '/ month'} [x]
  

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
