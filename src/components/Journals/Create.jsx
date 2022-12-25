import React, { useState } from "react";
import {addDoc, collection} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Create() {
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
        id: auth.currentUser.uid
        },
      });
    navigate("/");
  }

  return (
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
        <button className="submitBtn" onClick={createPost}>Submit Post</button>
      </form>
    </section>
  );
}
