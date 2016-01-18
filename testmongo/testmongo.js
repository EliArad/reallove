var jsonsql = {


    query: function (sql, json) {

        var returnfields = sql.match(/^(select)\s+([a-z0-9_\,\.\s\*]+)\s+from\s+([a-z0-9_\.]+)(?: where\s+\((.+)\))?\s*(?:order\sby\s+([a-z0-9_\,]+))?\s*(asc|desc|ascnum|descnum)?\s*(?:limit\s+([0-9_\,]+))?/i);

        var ops = {
            fields: returnfields[2].replace(' ', '').split(','),
            from: returnfields[3].replace(' ', ''),
            where: (returnfields[4] == undefined) ? "true" : returnfields[4],
            orderby: (returnfields[5] == undefined) ? [] : returnfields[5].replace(' ', '').split(','),
            order: (returnfields[6] == undefined) ? "asc" : returnfields[6],
            limit: (returnfields[7] == undefined) ? [] : returnfields[7].replace(' ', '').split(',')
        };

        console.log(ops);
        return this.parse(json, ops);
    },

    parse: function (json, ops) {
        var o = {fields: ["*"], from: "json", where: "", orderby: [], order: "asc", limit: []};
        for (i in ops) o[i] = ops[i];

        var result = [];
        result = this.returnFilter(json, o);
        result = this.returnOrderBy(result, o.orderby, o.order);
        result = this.returnLimit(result, o.limit);

        return result;
    },

    returnFilter: function (json, jsonsql_o) {

        var jsonsql_scope = eval(jsonsql_o.from);
        var jsonsql_result = [];
        var jsonsql_rc = 0;

        if (jsonsql_o.where == "")
            jsonsql_o.where = "true";

        for (var jsonsql_i in jsonsql_scope) {
            with (jsonsql_scope[jsonsql_i]) {
                if (eval(jsonsql_o.where)) {
                    jsonsql_result[jsonsql_rc++] = this.returnFields(jsonsql_scope[jsonsql_i], jsonsql_o.fields);
                }
            }
        }

        return jsonsql_result;
    },

    returnFields: function (scope, fields) {
        if (fields.length == 0)
            fields = ["*"];

        if (fields[0] == "*")
            return scope;

        var returnobj = {};
        for (var i in fields)
            returnobj[fields[i]] = scope[fields[i]];

        return returnobj;
    },

    returnOrderBy: function (result, orderby, order) {
        if (orderby.length == 0)
            return result;

        result.sort(function (a, b) {
            switch (order.toLowerCase()) {
                case "desc":
                    return (eval('a.' + orderby[0] + ' < b.' + orderby[0])) ? 1 : -1;
                case "asc":
                    return (eval('a.' + orderby[0] + ' > b.' + orderby[0])) ? 1 : -1;
                case "descnum":
                    return (eval('a.' + orderby[0] + ' - b.' + orderby[0]));
                case "ascnum":
                    return (eval('b.' + orderby[0] + ' - a.' + orderby[0]));
            }
        });

        return result;
    },

    returnLimit: function (result, limit) {
        switch (limit.length) {
            case 0:
                return result;
            case 1:
                return result.splice(0, limit[0]);
            case 2:
                return result.splice(limit[0] - 1, limit[1]);
        }
    }
};


require('./src/common/prototypes')

var express = require('express')
var mongoose = require('mongoose')

var bodyParser = require('body-parser')

var cookieParser = require('cookie-parser')


var app = express();

app.use('/static/', express.static(__dirname + '/static'));

app.use(bodyParser.json({limit: '1mb'}))
//app.use(bodyParser.raw({limit: '1mb',type: "application/octet-stream"}))
app.use(bodyParser.raw({limit: '5mb'}))

app.use(cookieParser())


app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authToken, ovenId');
    next(); // http://expressjs.com/guide.html#passing-route control
});


app.listen(4000);
mongoose.connect('mongodb://127.0.0.1:27017/goji_exp');
console.log('server started at port 4000');
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
    console.log("Restarting server, the time is {0}".format(new Date()))

})

exports.app = app

var dishes = require('./src/dishes/dish').model;
var cookingResult = require('./src/cooking/cookingResult').model;
var experiment = require('./src/cooking/experiment').model;
var experiment = require('./src/cooking/experiment').model;
var user = require('./src/users/user').model;
var CookingSetup = require('./src/cooking/CookingSetup').model;
var vecton = require('./src/vectons/vecton').model;

var CookingResultSchema = require('./src/cooking/cookingResult').schema;
var options = {
    _experiments: {
        options: {
            sort: '-name'
        }
    }
}


var deepPopulate = require('mongoose-deep-populate')(mongoose, options);
CookingResultSchema.plugin(deepPopulate);


/*
 cookingResult
 .findOne({ _id:'569629598f0f4c950a01d63a' })
 .populate('_dish')
 .exec(function (err, result) {
 if (err) return handleError(err);
 console.log('rrrrr %s', result);

 });
 */

// find one and return all path that we want
/*
 cookingResult.find( { _id: '569629598f0f4c950a01d63a'}).deepPopulate('_experiment._dish._author _cookingSetup ').exec(function(err, results) {
 results.forEach(function (result) {
 // post.comments and post.comments.user are fully populated
 console.log(result._cookingSetup);
 console.log(result._experiment.name);
 console.log(result._experiment._dish.description);
 console.log(result._experiment._dish._author.name);
 });

 });
 */

/*
 // everything in all path:
 cookingResult.find({'state' : 'stopped'}).deepPopulate('_experiment._dish._author').exec(function(err, results) {
 results.forEach(function (result) {
 if (result._experiment._dish.name == 'Cake Batter')
 console.log(result._experiment._dish);
 });
 });
 */

var _ = require('underscore');


var json1 =
{
    _id: '569629598f0f4c950a01d63a',
    targetTime: 1200,
    targetScore: 5,
    _experiment: {
        _id: '569628658f0f4c950a01d635',
        _author: '569625088f0f4c950a01d622',
        _dish: {
            _id: '569627788f0f4c950a01d625',
            name: 'cake',
            description: 'chocolate cake',
            _author: [Object],
            targetScore: 5,
            _image: '569626458f0f4c950a01d623',
            __v: 0,
            scoreTable: [Object],
            tempTemplate: [Object],
            cookingSetup: [Object],
            lastUpdate: 'Wed Jan 13 2016 12:31:20 GMT+0200 (Jerusalem Standard Time)',
            created: 'Wed Jan 13 2016 12:31:20 GMT+0200 (Jerusalem Standard Time) '
        },
        name: 'Cake exp',
        description: 'checking the influence of different time',
        __v: 2,
        setups: ['569628938f0f4c950a01d636', '5696291b8f0f4c950a01d639'],
        dependantVariable: {name: 'time'},
        created: 'Wed Jan 13 2016 12:35:17 GMT+0200 (Jerusalem Standard Time)'
    },
    _cookingSetup: '569628938f0f4c950a01d636',
    _author: '569625088f0f4c950a01d622',
    __v: 1,
    actualScore: 1,
    averageTemperature: 15,
    initialTemp: 0.3,
    initialWeight: 0.54,
    maxTemperature: 20,
    minTemperature: 10,
    remarks: 'the test failed , the cake is yellow',
    vectonCookingInformation: {steps: [], totalDuration: 0},
    state: 'failed',
    scoreTable: [{
        criterion: 'taste',
        _id: '569629598f0f4c950a01d63b',
        item: [Object]
    },
        {
            criterion: 'color',
            _id: '569629598f0f4c950a01d63c',
            item: [Object]
        }],
    tempResultsTable: [{row: 2, column: 1, temp: 10, _id: '569629f88f0f4c950a01d640'},
        {row: 1, column: 2, temp: 20, _id: '569629f88f0f4c950a01d63f'}],
    RapidHeatTimeToTemp: 0,
    RapidHeatTemp: 0,
    RapidHeatTime: 3,
    _vecton: null,
    image: [{
        imageUrl: '/static/images/uploads/569629748f0f4c950a01d63d?v=0.17134258849546313',
        imageDesc: 'from top',
        _id: '569629f88f0f4c950a01d642'
    },
    {
        imageUrl: '/static/images/uploads/569629788f0f4c950a01d63e?v=0.5149582410231233',
        imageDesc: 'from side',
        _id: '569629f88f0f4c950a01d641'
    }],
    created: 'Wed Jan 13 2016 12:39:21 GMT+0200 (Jerusalem Standard Time)'
};

var LINQ = require("node-linq").LINQ;
var users = [
    {name: 'Bob', joined: new Date('12/27/1993')},
    {name: 'Tom', joined: new Date('12/25/1993')},
    {name: 'Bill', joined: new Date('11/10/1992')},
];
var arr = new LINQ([json1])

    .Where(function(user) { return user.targetTime === 1200; })
    .ToArray();
//console.log(arr);
//cookingResult.find({'state' : 'stopped'}).deepPopulate('_experiment._dish._author').exec(function(err, results) {
cookingResult.find().deepPopulate('_experiment._dish._author _experiment._author  _experiment._cookingSetup _vecton').exec(function (err, results) {

    //console.log(results[0]);
    console.log(results.length);
    for (var i =  0 ; i < results.length; i++) {
        try {
            var arr = new LINQ([results[i]])
                //.Select(function(user) {return user._experiment._author.name;})
                //.Select(function(user) {return user._experiment._author.name;})
                //.Select(function(user) {return user;})
                .Where(function (user) {
                    //console.log(user._experiment._dish.name);
                    return user._experiment._dish.name == '0.5kg minced meat';
                })
                //.Where(function(user) { return user._experiment._author.name.first == 'eli'; })
                //.Where(function(user) { return user.targetTime = 1200 })
                .ToArray();
            if (arr.length != 0)
                console.log(arr);
        }
        catch(e){
            console.log(e);
        }
    }

    //console.log(json);
    //var x = jsonsql.query("select * from json where (json.targetTime == 1200)",json);
    //var x = jsonsql.query("select * from json where (json._experiment.name == 'e')",json);
    //console.log(x);

     /*
     results.forEach(function (result) {
     try {
     if (result._experiment._dish._author.name.first == 'eli') {
     //console.log(result._experiment._dish);
     console.log(result);
     }
     }
     catch (e){}
     });
     */
});
