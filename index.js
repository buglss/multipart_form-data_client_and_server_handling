const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const fileupload = require("express-fileupload")
const axios = require("axios")
const formData = require("form-data")

app.use(express.static('public'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(fileupload());

app.post('/dock', function(req, res) {
    let data = new formData()
    for(let name in req.body) data.append(name, req.body[name])
    for(let i in req.files.files) data.append("files", req.files.files[i].data, { filename: req.files.files[i].name })
    let config = {
        method: 'post',
        url: 'http://buglss.github.io/XXX',
        headers: { ...data.getHeaders() },
        data: data
    };

    axios(config)
        .then(function(response) {
            res.send(JSON.stringify(response.data))
        })
        .catch(function(error) {
            res.send(error);
        });
})

app.listen(3000)