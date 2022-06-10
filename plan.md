# TASK 1

## SET UP
1. npm i 
2. We want to make the default export in `src/components/BlogPost/index.js
    - Go to the index.js file in "src" folder
    - Import BlogPost
    - Render BlogPost inside the HTML bit

## BlogPost index.js folder
The importing stuff
- import React
- Create a function called BlogPost
- return a h1 tag to check whether is works
- export default BlogPost

Creating the bear bones using HTML
- Now we want to create the bear bones of our blog post to see what it would look like
- Take apart each component of the blog post and create a HTML tag for each
- Wrap everything in a parent <main> tag
- You should return the following:
            <main>
      <h1>Title</h1>
      <h2>Author</h2>
      <p>Date Posted</p>
      <figure>
        <img src="https://tinypng.com/images/social/developer-api.jpg" alt="Cool pic"></img>
        <figcaption>Panda Bear</figcaption>
      </figure>
      <p>Content Content Content</p>
    </main>