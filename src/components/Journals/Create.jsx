import React from "react";
import fb from '../firebase';
 db = fb.firestore()
const Blogs = db.collection('blogs');

export default function Create() {
  return <div>Create</div>;
}
