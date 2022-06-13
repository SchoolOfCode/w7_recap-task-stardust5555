import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//Task 1 - BlogPost
import BlogPost from "./components/BlogPost";
//Task 2- Comment
//import Comment from "./components/Comment";
//Task 2- CommentList
//import CommentList from "./components/CommentList";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BlogPost />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
