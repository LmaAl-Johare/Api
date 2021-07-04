const mysql=require ('mysql2/promise');
module.exports= db = {};

connection()

async function connection(){
const dbconnection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',

  });
  db.connection=dbconnection;

}