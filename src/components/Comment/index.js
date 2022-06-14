import React from "react";

function Comment() {

  const commentDetails = {
    author: "Ben Lee",
    content: "This is my lovely comment"
  }


  return (
    <main>
        <h2>{commentDetails.author}</h2>
        <p>{commentDetails.content}</p>
    </main>
  )
}

export default Comment;
