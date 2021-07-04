const express = require('express')
const app = express()
const cors=require('cors')
const bodyParser = require('body-parser')
const db= require('./db')

var corsOptions =
{
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.listen(8000, () => {
    console.log('Server started!')})

//create new category in categories database table
    app.post('/api/Category ',async(req,res)=>{
        let sql = "INSERT INTO  categories  (id ,category_name,category_description) VALUES (?,?,?)"
         await db.connection.execute(sql,[req.body.id,req.body.category_name,req.body.category_description])
         console.log("done")
        res.status(200).json("..")
       })
// update an existing category in the database
app.put('/api/Category:id', async (req, res) => {
    let sql = "UPDATE categories SET category_name=?,category_description=? WHERE id=?  "
    await db.connection.execute(sql,[req.body.category_name,req.body.category_description,req.params.id])
    res.status(200).json("..")
})
//get list of categories
app.get('/api/Category', async (req, res) => {
    let sql = "SELECT *  FROM categories "
    let [result,row] = await db.connection.execute(sql)
    res.status(200).json(result)
})