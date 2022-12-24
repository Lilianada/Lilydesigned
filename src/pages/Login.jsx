import React from "react";
import {auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";

export default function Login({setIsAuth}) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
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
