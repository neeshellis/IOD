const express = require('express')
const app = express()
const port = (4000)

const app1 = express()
const port1 = (4001)

const app2 = express()
const port2 = (4002)


app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening at
http://localhost:${port}`)
})

app.listen(port1, () => {
console.log(`Example app listening at
http://localhost:${port1}`)
})

app.listen(port2, () => {
console.log(`Example app listening at
http://localhost:${port2}`)
})