// const { resolveSrv } = require('dns/promises');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    // res.send('<h1>NODEMON CALC </h1>')
    // res.sendFile(__dirname + '/index.html')
    console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`)
})
// Now we body parser use  app.use(bodyparser)
// BOdy parser have the special format bodyparse.json bodyparser.txt bodyparser.urlencoded( { extended: true})
app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    // console.log(req.body);
    res.send(`The result is ${result}`)
})

/* bmi calculator root  */
app.get('/bmicalculator', (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`)
})
app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)

    let bmi = weight / (height * height)

    res.send(`<h1>The BMI of the body is ${bmi} </h1>`)
})
// Now We sent the response is sent to the most best way npm i body-parser
app.listen('3000', () => {
    console.log("Listen on the port 3000");
})
