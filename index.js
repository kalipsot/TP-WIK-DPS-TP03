var express = require('express');
var dotenv = require('dotenv');
var app = express();
dotenv.config();
var port = process.env.PING_LISTEN_PORT;
app.use(express.json());
app.get('/ping', function (req, res) {
    try {
        res.json(req.headers);
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
});
app.get("*", function (req, res) {
    try {
        res.status(404).send();
    }
    catch (e) {
        console.log(e);
        res.status(500).send();
    }
});
app.listen(port, function () {
    console.log("Server listening on ".concat(port));
});
