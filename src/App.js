import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore";
import ForgotPasswords from "./pages/ForgotPasswords";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";


function App() {

  // gt add data doc   [x]
  // gt signup   [x]
  // import{setDoc, doc,serverTimestamp} from 'firebase/firestore'   [x]
  // inside of try, var formDataCopy = {...formData}   []
  // delete formDataCopy.password   []
  //formDataCopy.timestamp= serverTimestamp()   []
  // await setDoc() pass doc pass db and 'users', user.uid   []
  // inser second arg of doc, formDataCopy   []


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
    </>
  );
}

export default App;
