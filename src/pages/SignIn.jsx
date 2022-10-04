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
      <div className="m-10 border bg-white w-96  p-12 rounded-lg  ">
        <header>
          <p className="text-center font-extrabold text-2xl mb-8 ">
            Welcome Back!
          </p>
        </header>
        <form className="space-y-8 " onSubmit={onSubmit}>
          <div class="relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              type="text"
              id="email"
              value={email}
              onChange={onChange}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>
          <div class="relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Password
            </label>{" "}
            <div className="flex items-center gap-4 ">
              <img
                src={visibilityIcon}
                alt="show password"
                className="w-5"
                onClick={() => setShowPassword((prev) => !prev)}
              />

              <Link to="/forgot-passwords" className="text-sm hover:underline">
                Forgot Password
              </Link>
            </div>
          </div>

          <div className="flex justify-around items-center">
            <button className="bg-green-400 w-full rounded-3xl text-white font-bold mb-4 p-2 px-4">
              <p className="signInText">Sign In</p>
            </button>
          </div>
        </form>
        <OAuth />
        <Link
          to={"/sign-up"}
          className="mx-auto block text-center hover:underline text-green-600"
        >
          Sign Up Instead
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
