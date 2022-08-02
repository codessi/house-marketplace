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
//gt categoryjsx
  // import useeffect,state,   useParams,
  // import collection, getDocs,query, where, orderBy, limit, startAfter
  // db from config
  // toast  Spinner
  // listings state set null
  // loading  set true
  // initial params
  // effect  insert const fetchListings async function
  // insert try catch
  // in try listingRef = collection(db, 'listings')
  // insert in try  const q = query(listingRef, where('type', '==', params.categoryName), orderBy('timestamp', 'desc'), limit(10))
  // const querySnap = await getDocs(q)
  // let listing = []
  // querySnap.forEach((doc) => {})
  // console.log(doc.data()
  // check console
  // return listings.push()
  // pass {id: doc.id, data: doc.data()}
  // outside of forEach,  setListing(listings)
  //setLoading(false)
  // toast.error('could not fetch listings)
  // jsx .category wrap header wrap p.pageheader wrap
  // {param.categoryName === 'rent'? 'Place for rent': 'Places for sale'}
  // sbliing to header, {loading? <Spinner /> : listings && listings >0 ? <></>: <p>No Listings for {params.categoryName}</p>}
  // inside <></> , insert main wrap ul.categoryListings wrap {listings.map((listing) => ( <h3>{listing.data.name}</h3>))}
  // check 

  

  
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
