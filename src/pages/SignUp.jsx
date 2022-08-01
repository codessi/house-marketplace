import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "./../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "./../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "./../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // form data... empty

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    // whateverupdtead from niput
    // will creauser thr firebase 

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //taking the respondse user part

      updateProfile(auth.currentUser, { displayName: name });
      // update profiel by getAuth dna dthe cureenusering'
      // add update name from state what... why update profile? it's sign up. oh we are adding name   becasue caret eon ly take email and password
      // then take the passowrd
      // add time stamk  then add that object to 
      // firestore collection. 

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      // add the server time temps. 
      console.log(serverTimestamp())
      //  

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>

      <form onSubmit={onSubmit}>
        <input
          type="name"
          className="nameInput"
          placeholder="name"
          id="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          className="emailInput"
          placeholder="email"
          id="email"
          value={email}
          onChange={onChange}
        />
        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            className="passwordInput"
            placeholder="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <img
          src={visibilityIcon}
          alt="show password"
          onClick={() => setShowPassword((prev) => !prev)}
        />

        <div className="signUpBar">
          <p className="signUpText">Sign Up</p>
          <button className="signUpButton">
            <ArrowRightIcon fill="#fffff" width={34} height={34} />
          </button>
        </div>
      </form>
      <Link to={"/sign-in"} className="registerLink">
        Sign In Instaed
      </Link>
    </div>
  );
};

export default SignUp;
