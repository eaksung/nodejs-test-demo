var chai = require('chai');
var expect = chai.expect;
var request = require('request');

describe('Calculate distance between two point API', function() {
    var url = 'http://localhost:8000/distance';
    var invalidOptions = {
        uri: url,
        method: 'POST',
        json: {
            'origin': {},
            'destination': {}
        }
    }
    var options = {
        uri: url,
        method: 'POST',
        json: {
            'origin': {
                'lat': 13,
                'lng': 100
            },
            'destination': {
                'lat': 14,
                'lng': 101
            }
        }
    };
    describe('Send json paramter format', function() {
        it('return status 200', function(done) {
            request(options, function(err, res, body) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });

        it('invalid request, return status 400', function(done) {
            request(invalidOptions, function(err, res, body) {
                expect(res.statusCode).to.equal(400);
                done();
            });
        });
    });

    describe('Calculate distance API', function() {
        it('return the distance', function(done) {
            request(options, function(err, res, body) {
                expect(res.statusCode).to.equal(200);
                expect(body.code).to.equal(1);
                expect(body.distance).to.exist;
                done();
            });
        });
    });
});
