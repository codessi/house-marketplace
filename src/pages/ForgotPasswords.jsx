import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "./../assets/svg/keyboardArrowRightIcon.svg";
import { Link } from "react-router-dom";

const ForgotPasswords = () => {

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("email sent");
    } catch (error) {
      toast.error('Could not send reset email');
    }
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form action="" onSubmit={onSubmit}>
          <input className="emailInput" placeholder="email" id="email" type="email" onChange={onChange} value={email} />
          
          <Link className="forgotPassworLink" to='/sign-in'>Sign In</Link>
          <div className="signInBar">
            <div className="signInText"> Send Reset Link</div>
            <button className="signInButton" type="submit">
              <ArrowRightIcon fill="#FFFFFF" width="34px" height={ 34} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPasswords;
