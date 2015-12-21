var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var cityDataObject = [];

// constractor - revealing prototype pattern
var Sitehelper = function () {
    //console.log("Sitehelper constractor");
}

Sitehelper.prototype = function () {

    var loadCities = function (fileName) {


        var parser = parse({
            delimiter: '2'
        }, function (err, data) {
            async.eachSeries(data, function (line, callback) {
                //console.log(data);
            });
        });
        fs.createReadStream(fileName).pipe(parser);
    }

    var basic = function (fileName, callback) {
        var basicCSV = require("basic-csv");
        basicCSV.readCSV(fileName, function (error, rows) {
            callback(rows);
        });
    }

    return {
        loadCities: loadCities,
        basic: basic
    };
}();

module.exports.siteHelper = Sitehelper;