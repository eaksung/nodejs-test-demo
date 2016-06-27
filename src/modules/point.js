class Point {
    constructor(coor = {}) {
        this.lat = coor.lat || null;
        this.lng = coor.lng || null;
    }

    validAttr() {
        if(this.lat == null || this.lng == null) {
            throw new TypeError('lat and/or lng is null');
        }
    }

    getKMDistance(dest) {
        this.validAttr()
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
    }

    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    toArray() {
        return [this.lat, this.lng];
    }

    getCoordinate() {
        return { lat: this.lat, lng: this.lng };
    }
}

module.exports = Point;
