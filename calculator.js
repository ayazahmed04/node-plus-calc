const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`)
})

app.post('/', (req, res) => {
    let number1 = Number(req.body.num1)
    let number2 = Number(req.body.num2)
    let result = number1 + number2

    res.send(`The sum of the number is ${result}`)
})
/* Now we are finding the BMI of the man */
app.get('/bmicalculator', (req, res) => {
    res.sendFile(`${__dirname}/bmiCalculator.html`)
})
app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)
    let bmi = weight / (height * height)

    res.send(`<h1 style="color:blue">Your BMI IS ${bmi} </h1>`)
})
app.listen(3000, () => {
    console.log("LISTEN AT localhost:3000");
})