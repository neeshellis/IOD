const express = require('express');
const router = express.Router();


router.get('/add', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 + number2
console.log(sum)
res.status(200)
res.json({result:sum})
})


// new route for subtracting two numbers
router.get('/subtract', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 - number2
console.log(sum)
res.status(200)
res.json({result:sum})
})

// new route for dividing two numbers
router.get('/divide', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 / number2
console.log(sum)
res.status(200)
res.json({result:sum})
})

// new route for subtracting two numbers
router.get('/multiply', (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 * number2
console.log(sum)
res.status(200)
res.json({result:sum})
})

router.post('/new', (req, res) => {
        res.json({result:req.body})
    })

const arr = [{num1: 1}, {num1: 2}, {num1: 3}]

router.put('/update', (req, res) => {
    const findByQuery = req.query.find
    let replaceValue = arr.find(item => item.num1 = findByQuery)
     replaceValue = req.body.num1
    res.send({
        "num1": replaceValue
      })
    // res.json({ result: req.body })
})


module.exports = router;