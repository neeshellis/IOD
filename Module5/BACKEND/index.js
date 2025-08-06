const testRoutes = require("./routes/myTestRoutes");

// import all calculator routes (up the top)
const calculatorRoutes =
require('./routes/calculatorRoutes');

const express = require("express"); //require the express package
const app = express(); //create an app using the express
// package
const port = 3000; // set the port to 3000

// ADD TO index.js ABOVE ALL app.use CALLS
// parse requests of content-type - application/json
app.use(express.json());

const userRoutes = require('./routes/userRoutes');

app.use("/", express.static("public"));

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// app.get('/test', (req, res) => {
// res.send('This is a test')
// })

app.use("/mytest", testRoutes);

app.use('/calculator', calculatorRoutes);

app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// lab 1 repeat with making another app directory with some different ports like 3001
