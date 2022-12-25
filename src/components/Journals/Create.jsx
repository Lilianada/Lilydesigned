import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default function Create({ isAuth }) {
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");

  const postCollectionRef = collection(db, "journals");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      textBody,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect (() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [])

  return (
    <ErrorBoundary>
      <section className="createPost">
        <h3 className="title">Create a new post</h3>
        <form action="" className="createPost_form">
          <label htmlFor="Email" className="formLabel">
            Title of post
          </label>
          <textarea
            name="create-Post"
            className="createPost_title"
            cols="30"
            rows="10"
            placeholder="Type your new post here!"
            onChange={(event) => setTitle(event.target.value)}
            required
          ></textarea>
          <label htmlFor="Email" className="formLabel">
            Body of post
          </label>
          <textarea
            name="create-Post"
            className="createPost_body"
            cols="30"
            rows="10"
            placeholder="Type your new post here!"
            onChange={(event) => setTextBody(event.target.value)}
            required
          ></textarea>
          <button className="submitBtn" onClick={createPost} type="button">
            Submit Post
          </button>
        </form>
      </section>
    </ErrorBoundary>
  );
}
