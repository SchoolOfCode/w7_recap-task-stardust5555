import React from "react";

function Comment() {

  const lilComment = {
    authorInitials: "BL",
    author: "Ben Lee",
    content: "This is my lil comment"
  }


  return (
    <main>
        <h1>{lilComment.authorInitials}</h1>
        <h2>{lilComment.author}</h2>
        <p>{lilComment.content}</p>
    </main>
  )
}

export default Comment;
