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
 
  // gt stroge web cod firebase.google.com []
  // copy imports []
  // import db []
  // install uuid []
  //import v4 as uuidv4 from uuid []
  //  inside of bottom of onsubmit but above setloading(false), comment store image in fire base []
  // const storeImage async function  passing image , {} []
  // return new Promise((resolve, reject) => {}) []
  // const storeage = getStorage() []
  // const fileName = `${auth.currentUser.uid}-${image.name}-${uuid4()}` []
  // const storageRef = ref(storage, 'images/' + fileName) []
  // copy paste uploadTask  & .on []
  // clean up comments []
  // fill error reject(error) []
  // reaplce console with resolve(downloadURL) []
  // above setLoading(false), const imgUr = await Promise.all () []
  // pass  [...images].map(image => storageImage(image) []
  // .catch(() => { insert* }) []
  // setLoading(false) toast.error('Images not uploaded') return  []
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
