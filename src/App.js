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


function App() {

  // create privateRoutejsx  []
  // rafece  []
  // import Navigate Outlet  []
  // loggedIn = false  []
  // return loggedIn? <Outlet /> : <Navigate to='/sign-in'>  []
  // gt app  []
  // import privateRoute  []
  // insert route path /profile element <PrivateRoute /> wrap  []
  // insert route /profile <Profile  []

  // create hooks folder  []
  // create useAuthStatus.js  []
  //  rafc  []
  // import useEffect, useState  []
  // import {getAuth, onAuthStateChanged} from 'firebase/auth'  []
  // state loggedIn, setLoggedIn  set false  []
  // checkingStatus, setCheckingStatus set true  []
  // useEffect(() => {})  []
  // initlize auth  []
  // insert in effect, onAuthStateChanged(auth, (user) => {})  []
  // insert  if user true setLoggedIn true  []
  // ouside if  setCheckingStatus false  []
  // return { loggedIn, checkingStatus}  []
  // gt privateRoute  []
  // import useAuthStatus  []
  // const {loggedIn, chechingStatus} = useAuthStatus()  []
  // if (checkingStatus){ return h3 Loading }  []
  // return loggedIn? <Outlet /> : <Navigate to = '/sign-in' />  []
  // check browser  []
  
  // gt useAuthStatus  []
  // import useRef  []
  // isMounted = useRef(true)  []
  // insert in top of useEffec , if isMounted  mover rest function inside of conditional  []
  // ouside of if , return  () => { isMounted.current = false }  []
  // add dependancy , [isMounted]  []
  // add Spinner.jsx in component  []
  // rafce  []
  // .loadingSpinnerContainer wrap  []
  // .loadingSpinner  []
  // bring in to PrivateRoute  []
  // insert replace "loading"  []



  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile/>} />
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
