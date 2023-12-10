const express = require("express");
const app = express();
const PORT = 6001;
const HOST = "localhost";

app.use(express.json());

/**
 * /api/v1/{path}
 * BE -> /api/v1/users
 * fe -> /users
 * 
 * /api/v1/posts -> GET => return all available posts
 * /api/v1/posts -> POST => add POST to collection
 * /api/v1/posts/:id -> GET => return specific post
 * /api/v1/posts/:id -> PUT => edit specific post
 * /api/v1/posts/:id -> DELETE => delete specific post by id
 * 
 */


app.use(require("./routes/index.routes"));


app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`)
} )

