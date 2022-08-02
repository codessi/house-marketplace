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


function App() {
// gt explore  [x]
  // import Link  [x]
  // import rentCatagoryImage , sellCat...  [x]
  // jsx .explore wrap  []
  // header wrap  []
  // p.pageHeader cont Explore  []
  // sibling to header,  main wrap  []
  // p.exploreCategoryHeading cont Categories  []
  // sibing p, .exploreCategories wrap  []
  // Link to '/category/rent' wrap  []
  // img src rent.. alt rent class exploreCategoryImg  []
  // sibling img, p.exploreCategoryName cont Place for rent  []
  // copy pasted Link, paste next and change sell from rent  []

  // creat Category.jsx under pages  []
  // rafce  []
  // gt app, import Category  []
  // update category path add :categoryName  element= <Category  []
  // 

  
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
