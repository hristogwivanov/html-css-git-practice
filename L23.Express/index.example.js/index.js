const express = require("express");
const app = express();
const PORT = 6001;
const HOST = "localhost";

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, I am express server")
});

app.get("/hello/:user", (req, res) => {
    console.log(req.params);
    const { user } = req.params;
    res.send(`Welcome, ${user}! This is our greetings page!`)
})

app.get("/posts/:id", (req, res) => {
    console.log(req.query);
    const { id } = req.params;
    res.send(`You tried to request post with id ${id}!`)
})

app.post('/posts', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201);
})

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`)
} )


// console.log(app);