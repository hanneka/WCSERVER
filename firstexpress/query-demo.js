//Hanneka Rose C. Puri
//query-demo.js

const { response } = require("Express");
const express = require('express')
const app = express()

app.get('/', (req, res) => {
console.log(req.query)
})
app.listen(8080)