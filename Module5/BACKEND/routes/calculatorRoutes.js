const express = require("express");
const router = express.Router();

// new route for adding two numbers
// router.get('/add', (req, res) => {
// res.send('Add')
// })

// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

router.get("/add", (req, res) => {
    // parseInt turns num1 into an integer
  let number1 = parseInt(req.query.num1); 
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
//  the line below checks the format is correct it is 200
  res.status(200);
// changes this into json format to read the answer
  res.json({ result: sum });
});

module.exports = router;
