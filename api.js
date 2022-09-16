const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/detail', (req, res)=>{
    client.query(`Select * from detail`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/detail/:std_id', (req, res)=>{
    client.query(`Select * from detail where std_id=${req.params.std_id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.post('/detail', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into detail(std_id,name,surname,roll,branch,city,gender) 
                       values(${user.std_id},'${user.name}','${user.surname}',${user.roll},'${user.branch}','${user.city}','${user.gender}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful');
        }
        else{ console.log(err.message); }
    })
    client.end;
})


app.post('/login', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into login(username,password) 
                       values('${user.username}','${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful');
        }
        else{ console.log(err.message); }
    })
    client.end;
})

app.put('/detail/:std_id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update detail
                       set name = '${user.name}',
                       surname = '${user.surname}',
                       roll = ${user.roll},
                       branch = '${user.branch}',
                       city = '${user.city}',
                       gender = '${user.gender}'
                       where std_id = ${user.std_id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/detail/:std_id', (req, res)=> {
    let insertQuery = `delete from detail where std_id=${req.params.std_id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})