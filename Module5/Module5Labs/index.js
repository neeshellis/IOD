const express = require("express"); // import the express package
const calculatorRoutes = require("./routes/calculatorRoutes");
const friendRoutes = require("./routes/friendRoutes");

const app = express(); // create a new app
const port = 3000; // unique 4 digit port

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Nodejs Connection application." });
  });

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// const app2 = express(); // create a new app
// const port2 = 3001; // unique 4 digit port

app.use("/", express.static('public'));

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

app.use("/calculator", calculatorRoutes);

app.use("/friends", friendRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app2.listen(port2, () => {
//   console.log(`Example app listening at http://localhost:${port2}`);
// });
