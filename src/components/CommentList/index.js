import React from "react";
//import Comment from "../Comment/index"

function CommentList() {
  const comments = [
    {
      id: "kskBC5HZ8qgNQUiW6If6q",
      author: "Billy Bootcamper",
      content: "Hello, great post",
    },
    {
      id: "jFyGAKz1VsGputO1gV8xa",
      author: "Chris Meah",
      content: "Many thank yous",
    },
  ];
 
    
  return (
    <main>
     {comments.map(comment => {
        return (
          <div key={comment.id}>
            <h2>
              {comment.author}
            </h2>
               <hr />
            <p>
              {comment.content}
            </p>
          </div>
        );
      })}

    </main>
  );
}

export default CommentList;
