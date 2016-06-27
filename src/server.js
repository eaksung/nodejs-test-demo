const express = require('express');
const bodyParser = require('body-parser');
const Point = require('./modules/point');

const app = express();
app.use(bodyParser.json());

app.post('/distance', function(req, res, next) {
    const body = req.body;
    let valid = true;
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
        const p1 = new Point(body.origin);
        const p2 = new Point(body.destination);
        const data = {
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
