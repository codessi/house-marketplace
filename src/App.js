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

  // create compo. OAuth.jsx  [x]
  // rafce  [x]
  //gt sign in  [x]
  // import OAuth  [x]
// insert OAuth above link  [x]
  // gt signup same  [x]
  // useLocation useNavigate  [x]
  // getAuth, signInWithPopup, GoogleAuthProvider  [x]
  // doc, setDoc,getDoc from firestore  [x]
  // db from config  [x]
  // toast  [x]
  // googleIcon from  svg  [x]
  // initialize navigate , location  [x]
  // jsx .socialLogin wrap p cont Sign {location.pathname === '/sign-up' ? 'up' : 'in' } With  [x]
  // sibliing to p, button.socialIconDiv wrap img src ={googleIcon} alt="google"   [x]
  // onClick = { onGoogleClick } class="socialIconImg"  [x]
  // const onGoogleClick  [x]
  // async try  const auth,  const provider = new GoogleAuthProvider  [x]
  // const result = await signInWithPopup(auth, provider)  [x]
  // const user = result.user  []
  // docRef = doc(db, 'users", user,uid)  [x]
  // docSnap = await getDoc(docRef)  [x]
  // if (!docSnap.exits()){ }  []
  // await setDoc(doc(db, 'users', user.uid), {})  [x]
  // insert name: user.displayName, email: user.email,  [x]
  // timestamp: serverTimestamp()  [x]
  // outside of if,  navigate('/')  [x]
  // toast.error("could not authorize with Google")  [x]
  // test on browser  []
  // check on firestore  []
  
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
