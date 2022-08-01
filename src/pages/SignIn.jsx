import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "./../assets/svg/keyboardArrowRightIcon.svg";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import visibilityIcon from "./../assets/svg/visibilityIcon.svg";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const auth = getAuth();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
        );
      const user = userCredential.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>

      <form onSubmit={onSubmit}>
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
        <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
        </Link>

        <div className="signInBar">
          <p className="signInText">Sign In</p>
          <button className="signInButton">
            <ArrowRightIcon fill="#fffff" width={34} height={34} />
          </button>
        </div>
      </form>
      <Link to={"/sign-up"} className="registerLink">
        Sign Up Instaed
      </Link>
    </div>
  );
};

export default SignIn;
