import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const auth = getAuth();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  })

  const {name, email} = formData
  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }



  return <>
    <div className="profile">
      <p className="pageheader">My Profile</p>
      <button className="logOut" type='button' onClick={onLogout}>Logout</button>
  </div>
  </>
  
};

export default Profile;
