const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser = require('body-parser')

var corsOptions =
{
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.listen(8000, () => {
    console.log('Server started!')})


