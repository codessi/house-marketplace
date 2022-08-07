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

//delet location query [x]
  // create Contact.jsx in page [x]
  // rafce [x]
  // import in app [x]
  // route  path /contact/:landloardId contact [x]
  // gt contact.jsx [x]
  // import useState useEffect useparams useSearchParams [x]
  // doc getDoc [x]
  // db  toast [x]
  // state messsage "", landlord null, searchParams- useSearchParams() [x]
  // inital params [x]
  // useEffect dependancy params.landlordId [x]
  // in side useEffec, const getLandlord = async () =>{ insert* } [x]
  // const docRef = doc(db, 'users', params.landlordId) [x]
  // const docSnap = await getDoc(docRef) []
  // if(docSnap.exist()){ insert *} []
  // setLandlord(docSnap.data()) [x]
  // else { toast.error('Could not get landlord data')} [x]
  // jsx .pageContainer wrap []
  // header wrap  p.pageheader cont Contact Landlord []
  // sibling to header, {landlord  !==null && ( insert *)} [x]
  // main wrap, .contactLandlord wrap, p.landlordName wrap [x]
  //Contact {landlord?.name} [x]
  // sibling to div, form.messageForm wrap [x]
  // .messageDiv wrap [x]
  // label.messageLabel cont Message []
  // sibling textarea name & id  both message  class textarea value {messge} onChange {onChange} [x]
  // make onChange pass e setMessage (target.value ) [x]
  // sibling to bottom div, above closing form,  a href {`mailto:${landlord.email}?subject = ${searchParams.get('listingName')}&body=${message}`}  wrap [x]
  // button.primaryButton type button []
  // test []
  
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
