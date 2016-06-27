var method = Point.prototype;

function Point(lat, lng) {
    this.lat = lat;
    this.lng = lng;
};

method.getKMDistance = function(dest) {
    if(!(dest instanceof Point)) {
        throw new TypeError('destination is not Point object');
    }
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(dest.lat - this.lat);  // deg2rad below
    var dLon = this.deg2rad(dest.lng - this.lng);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this.deg2rad(this.lat)) * Math.cos(this.deg2rad(dest.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
};

method.deg2rad = function(deg) {
    return deg * (Math.PI / 180)
}

method.toArray = function() {
    return [this.lat, this.lng];
}

module.exports = Point;
