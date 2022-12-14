import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "./../assets/svg/googleIcon.svg";
import { app } from "../firebase.config";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "user", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="text-center p-5  space-y-2">
      <p>or Sign {location.pathname === "/sign-up" ? "up" : "in"} with google</p>
      <button className="w-10 " onClick={onGoogleClick}>
        <img src={googleIcon} alt="google icon" className="socialIconImg" />
      </button>
    </div>
  );
};

export default OAuth;
