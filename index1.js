const db = require('./Connection');

const express = require('express');

const app = express()



const port = process.env.port||3000;


app.get('/', (req, res) => {    

  db.connect((error)=>{

    if(error) throw error;
    else
    console.log("Connected");

    const sql ="SELECT * FROM User_Login;";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })