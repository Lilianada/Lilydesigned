import React from "react";
import {auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/")
    })
  }

  return(
    <section className="login">
      <header className="formhead">
        <h3 className="headText">Sign in with Google</h3>
      </header>
      <button className="submitBtn" onClick={signInWithGoogle}>Sign In</button>
    </section>
  );
}
