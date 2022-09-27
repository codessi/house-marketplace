import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "./../assets/svg/keyboardArrowRightIcon.svg";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import visibilityIcon from "./../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";

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
        password
      );
      const user = userCredential.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("bad user credential");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="m-10 border border-gray-400 p-7 rounded-lg  ">
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
          <div className="password-group flex ">
            <img
              src={visibilityIcon}
              alt="show password"
              onClick={() => setShowPassword((prev) => !prev)}
            />
            <Link to="/forgot-passwords" className="forgotPasswordLink">
              Forgot Password
            </Link>
          </div>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fffff" width={34} height={34} />
            </button>
          </div>
        </form>
        <OAuth />
        <Link to={"/sign-up"} className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
