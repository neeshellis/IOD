const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my SQL DB application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

let postRoutes = require('./routes/postRoutes');
app.use('/api/post', postRoutes);

const commentRoutes = require('./routes/commentRoutes');
app.use('/api/comment', commentRoutes);

// let likesRoutes = require('./routes/likesRoutes');
// app.use('/api/likes', likesRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});