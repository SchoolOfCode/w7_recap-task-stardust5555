# TASK 1 - BLOGPOST

## SET UP (src->index.js)
1. npm i 
2. We want to make the default export in `src/components/BlogPost/index.js
    - Go to the index.js file in "src" folder
    - Import BlogPost
    - Render BlogPost inside the HTML bit

## BlogPost index.js folder
STEP 1: The importing stuff
- import React
- Create a function called BlogPost
- return a h1 tag to check whether is works
- export default BlogPost

STEP 2: Creating the bear bones using HTML
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

STEP 3: Creating the blog object
- Create an object that contains everything we need for our blogpost (i.e. title, author, image)
- Store it inside a variable called "blog"
- Plonk this object into our BlogPost function
- Using dot notation, slot this information into our HTML tags instead of hard-coding. i.e.
        <main>
      <h1>{blog.title}</h1>
      <h2>{blog.author}</h2>
      <p>{blog.datPosted}</p>
      <figure>
        <img src={blog.imageSrc} alt={blog.imageAlt}></img>
        <figcaption>{imageAlt}</figcaption>
      </figure>
      <p>{blog.content}</p>
    </main>


# TASK 2 - COMMENT

## SET UP (src->index.js)
1. Now we want to make the default export in `src/components/Comment/index.js
    - Go to the index.js file in "src" folder
    - Import Comment
    - Render Comment inside the HTML bit

## Comment index.js folder
STEP 1: The importing stuff
- import React
- Create a function called Comment
- return a h1 tag to check whether is works
- export default Comment

STEP 2: Creating the bear bones using HTML
- Now we want to create the bear bones of our blog post to see what it would look like
- Take apart each component of the blog post and create a HTML tag for each
- Wrap everything in a parent <main> tag
- You should return the following:
    <main>
        <h1>BL</h1>
        <h2>Ben Lee</h2>
        <p>This is my post!</p>
    </main>

STEP 3: Creating the comment object
- Create an object that contains everything we need for our comment (i.e. author initials, author, comment)
- Store it inside a variable called "lilComment"
- Plonk this object into our Comment function
- Using dot notation, slot this information into our HTML tags instead of hard-coding. i.e.
    <main>
        <h1>{lilComment.authorInitials}</h1>
        <h2>{lilComment.author}</h2>
        <p>{lilComment.content}</p>
    </main>

# TASK 3 - COMMENT LIST

## SET UP (src->index.js)
1. Now we want to make the default export in `src/components/CommentList/index.js
    - Go to the index.js file in "src" folder
    - Import CommentList
    - Render CommentList inside the HTML bit

## CommentList index.js folder
STEP 1: The importing stuff
- import React
- Create a function called Comment
- return a h1 tag to check whether is works
- export default CommentList

STEP 2: Creating the CommentList object (PROPS)
- Create an array called "comments"
- This array should contain objects 
- Each object has the following structure:
    {
      id: string,
      author: string,
      content: string
    }

STEP 3: Render
- Render a `Comment` component for each item in the `comments` array (prop). Use the `id` of each comment as its React key.
    - import Comment into the CommentList file