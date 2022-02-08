const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2")
cors = require("cors");

app.use(cors());

var data = {};


app.use(bodyParser.json());

const port  = 5000;
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test12345",
    database: "airdata"
  })
conn.connect(function(err){
    if(err) throw err;
    console.log("MYSQL Connected");
  })

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

function data_produce(){
    var random = randomIntFromInterval(400, 3500);
    
   
    if(random< 1000){
       data.status = "red";
      }
      else if(random>1000 && random<2000){
        data.status = "green";
      }
      else{
        data.status = "yellow";
      } 
      data.amount = random
      console.log(data)
      
    }
function data_insert(){
        data_produce();
        conn.connect(function(err){
          if(err) throw err;
          conn.query(`INSERT into co_amount(status, amount)values('${data.status}', ${data.amount} )`);
          if(err) throw err;
          console.log("Entry done");
        })
        //Another API Endpoint to insert data
        /*app.get("/insertdata", (req, res) => {
        let sql = `INSERT into co_amount(status, amount)values('${data.status}', ${data.amount} )`;
        let query = conn.query(sql, data, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(`The entry added is ${eval(result)}`)
        });
    });*/

}
function data_extract(){
    
    app.get("/getdata", (req, res) => {
    setInterval(data_insert, 10000);
    let sql = `SELECT * from co_amount`;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
    //let data_send = getFields(results, "amount"); //to send a particular field rather than sending whole database in form of array
        res.send(results);
    });
  });
}

data_extract();


app.listen(port, () => console.log(`Server started on port ${port}`));