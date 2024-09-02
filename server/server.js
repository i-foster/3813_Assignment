var express = require('express');
const { request } = require('http');
var cors = require('cors')
var app = express();




app.use(bodyParer.json());
app.use(express.static(path.join(__dirname, '../dist/week4tut')));
app.use(cors());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '../index.html');
    });

    var express = require('express');
    const { request } = require('http');
    var cors = require('cors')
    var app = express();
    
    const path = require('path');
    const http = require('http').Server(app);
    const bodyParer = require('body-parser');
    
    
    
    app.use(bodyParer.json());
    app.use(express.static(path.join(__dirname, '../dist/week4tut')));
    app.use(cors());
    
    
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '../index.html');
        });
    
    app.post('/api/auth', function(req, res) {
    
        let details = [
            {"username":"i",
            "birthdate":"1/01/2000",
            "age":24,
            "email":"i@com",
            "password":"i",
            "valid":false
        },
        {"username":"z",
            "birthdate":"1/01/2000",
            "age":24,
            "email":"z@com",
            "password":"z",
            "valid":false
        },
        {"username":"a",
            "birthdate":"1/01/2000",
            "age":24,
            "email":"a@com",
            "password":"a",
            "valid":false
        }
        ];
    
        if (!req.body) {
            return res.sendStatus(400);
        }
    
        var user = {};
        user.email = req.body.email;
        user.password = req.body.password;
        user.valid = false;
    
        for(let i = 0; i < details.length; i++){
            if (user.username == details[i].username && user.password == details[i].password ) {
                console.log("Valid user")        
                details[i].valid = true;
            }else{
                console.log("username or password does not match")
                details[i].valid = false;
            }
        }})
    
    
        let server = http.listen(3000, function(){ 
            let host = server.address().address;
            let port = server.address().port;
            console.log("server listerning on: " + host + 
                "port: " + port)
        })
        