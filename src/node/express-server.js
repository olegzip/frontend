const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('ok');
})

app.get('/', (req, res) => {
    // get list of all users
    fs.readFile('./users.json','utf8',(err,data)=>{
        const userList = JSON.parse(data);
        res.send(`<ul>${userList.map((item)=>{return `<li>${item.firstName} ${item.lastName}</li>`}).join('\n')}</ul>`);
    })
    // res.send('hello world');
});
// app.get('/user/:id', (req, res) => {
//     res.send('hello user number '+req.params.id);
// });
//
// app.route('/user')
//     .get((req,res)=>{
//         res.send('get a user')
//     })
//     .post((req,res)=>{
//         res.send('add a new user')
//     })
//     .put((req,res)=>{
//         res.send('updated a user')
//     })


app.listen(3000);
