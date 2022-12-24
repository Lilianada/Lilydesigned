import React from "react";
import {auth, provider} from '../firebase';
import { signInWithPopup } from "firebase/auth";
export default function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      
    })
  }

  return(
    <section className="login">
      <header className="formhead">
        <h3 className="headText">Sign in with Google</h3>
      </header>
      <button className="submitBtn">Sign In</button>
    </section>
  );
}
