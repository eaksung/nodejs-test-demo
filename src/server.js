var express = require('express');
var bodyParser = require('body-parser');
var Point = require('./modules/point');

var app = express();
app.use(bodyParser.json());

app.post('/distance', function(req, res, next) {
    var body = req.body;
    var valid = true;
    if(typeof body.origin.lat == 'undefined') {
        valid = false;
    } else if(typeof body.origin.lng == 'undefined') {
        valid = false;
    } else if(typeof body.destination.lat == 'undefined') {
        valid = false;
    } else if(typeof body.destination.lng == 'undefined') {
        valid = false;
    }
    if(valid) {
        var p1 = new Point(body.origin.lat, body.origin.lng);
        var p2 = new Point(body.destination.lat, body.destination.lng);
        var data = {
            'code': 1,
            'distance': p1.getKMDistance(p2)
        };
        res.send(JSON.stringify(data));
    } else {
        res.sendStatus(400);
    }
});

app.use(function(req, res, next) {
    res.sendStatus(404);
});

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listen at http://%s:%s', host, port);
});
