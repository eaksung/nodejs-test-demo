var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var Point = require('../src/modules/point');

describe('Point', function() {
    describe('Create point object', function() {
        var p = new Point(13, 100);
        it('crate instance of Point should set lat and lng', function() {
            assert.equal(p.lat, 13, 'set lat correct');
            assert.equal(p.lng, 100, 'set lng correct');
            expect(p).to.be.instanceof(Point);
        });

        it('toArray() should return array [lat, lng]', function() {
            expect(p.toArray()).to.deep.equal([13, 100]);
        });
    });

    describe('Calculate distance between two point', function() {
        var p1 = new Point(13, 100);
        var p2 = new Point(14, 101);
        it('getKMDistance() should return number of distance', function() {
            expect(p1.getKMDistance(p2)).to.be.not.null;
            expect(Math.round(p1.getKMDistance(p2))).to.equal(155);
        });
    })
});
