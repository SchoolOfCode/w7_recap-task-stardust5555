import React from "react"

function BlogPost() {
  const blog = {
    title: "My Blog Title",
    author: "Shiv Patel",
    datePosted: "20/11/2021",
    content: `Hey Matt! Please rank the avengers in order from best to worst. We'll compare opinions on Tuesday. `,
    imageSrc: "https://2.bp.blogspot.com/-3dZHwWyteoM/XKpNr-qOOjI/AAAAAAAABUw/fXMZ0SC12dIyeWqQjrNTLwQ71upVGOHJgCKgBGAs/w2560-h1440-c/avengers-endgame-uhdpaper.com-8K-94.jpg",
    imageAlt: "The film that made my friends cry"
  }

  
  return (
    <main>
      <h1>{blog.title}</h1>
      <h2>{blog.author}</h2>
      <p>{blog.datePosted}</p>
      <figure>
        <img src={blog.imageSrc} alt={blog.imageAlt}></img>
        <figcaption>{blog.imageAlt}</figcaption>
      </figure>
      <p>{blog.content}</p>
    </main>

  );
}

export default BlogPost;
