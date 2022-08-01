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


function App() {

  // create privateRoutejsx  [x]
  // rafece  [x]
  // import Navigate Outlet  [x]
  // loggedIn = false  [x]
  // return loggedIn? <Outlet /> : <Navigate to='/sign-in'>  [x]
  // gt app  [x]
  // import privateRoute  [x]
  // insert route path /profile element <PrivateRoute /> wrap  [x]
  // insert route /profile <Profile  [x]

  // create hooks folder  [x]
  // create useAuthStatus.js  [x]
  //  rafc  [x]
  // import useEffect, useState  [x]
  // import {getAuth, onAuthStateChanged} from 'firebase/auth'  [x]
  // state loggedIn, setLoggedIn  set false  [x]
  // checkingStatus, setCheckingStatus set true  [x]
  // useEffect(() => {})  [x]
  // initlize auth  [x]
  // insert in effect, onAuthStateChanged(auth, (user) => {})  [x]
  // insert  if user true setLoggedIn true  [x]
  // ouside if,  setCheckingStatus false  [x]
  // return { loggedIn, checkingStatus}  [x]
  // gt privateRoute  []x
  // import useAuthStatus  [x]
  // const {loggedIn, chechingStatus} = useAuthStatus()  [x]
  // if (checkingStatus){ return h3 Loading }  [x]
  // return loggedIn? <Outlet /> : <Navigate to = '/sign-in' />  [x]
  // check browser  [x]
  
  // gt useAuthStatus  [x]
  // import useRef  [x]
  // isMounted = useRef(true)  [x]
  // insert in top of useEffec , if isMounted  mover rest function inside of conditional  [x]
  // ouside of if , return  () => { isMounted.current = false }  [x]
  // add dependancy , [isMounted]  [x]
  // add Spinner.jsx in component  [x]
  // rafce  [x]
  // .loadingSpinnerContainer wrap  [x]
  // .loadingSpinner  [x]
  // bring in to PrivateRoute  [x]
  // insert replace "loading"  [x]



  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
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
