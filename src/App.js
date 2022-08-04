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
 
  // gt stroge web cod firebase.google.com [x]
  // gt createListing.jsx [x]
  // copy imports [x]
  // import db [x]
  // install uuid [x]
  // import v4 as uuidv4 from uuid [x]
  // inside of bottom of onsubmit but above setloading(false), comment store image in fire base [x]
  // const storeImage async function  passing image , {} [x]
  // return new Promise((resolve, reject) => {}) [x]
  // const storeage = getStorage() [x]
  // const fileName = `${auth.currentUser.uid}-${image.name}-${uuid4()}` [x]
  // const storageRef = ref(storage, 'images/' + fileName) [x]
  // copy paste uploadTask  & .on [x]
  // clean up comments [x]
  // fill error reject(error) [x]
  // reaplce console with resolve(downloadURL) [x]
  // above setLoading(false), const imgUr = await Promise.all () [x]
  // pass  [...images].map(image => storageImage(image) [x]
  // .catch(() => { insert* }) [x]
  // setLoading(false) toast.error('Images not uploaded') return  [x]
  // test  console.log(imgUrls) []

  
  
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
