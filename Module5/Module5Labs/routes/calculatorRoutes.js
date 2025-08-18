const express = require('express')
const calculatorController = require('../controllers/calculatorController')
const router = express.Router()

router.get('/addRoute',(req, res) =>{
    console.log('reached add')
    calculatorController.addNumbers(req, res)
})

router.get('/subtractRoute',(req, res) =>{
    calculatorController.subtractNumbers(req, res)
})

router.get('/divideRoute',(req, res) =>{
    calculatorController.divideNumbers(req, res)
})

router.get('/multiplyRoute',(req, res) =>{
    calculatorController.multiplyNumbers(req, res)
})

module.exports = router