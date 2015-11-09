//var es = require('es');
//var client = new es.Client({
//    host: 'localhost:9200',
//    log: 'trace',
//    apiVersion: '1.0'
//});
//
//client.ping({
//    requestTimeout: Infinity,
//    hello: "elasticsearch!"
//}, function (error) {
//    if (error) {
//        console.trace('elasticsearch cluster is down!')
//    } else {
//        console.log('All good');
//    }
//});


var elasticsearch = require('elasticsearch');

var connectionString = 'http://localhost:9200';

var client = new elasticsearch.Client({
    host: connectionString
});

client.index({
    index: 'sample',
    type: 'document',
    id: '1',
    body: {
        name: 'Reliability',
        text: 'Reliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.'
    }
}, function (error, response) {
    console.log(response);
});

client.search({
    index: 'sample',
    type: 'document',
    body: {
        query: {
            query_string:{
                query:"Reliability"
            }
        }
    }
}).then(function (resp) {
    console.log(resp);
}, function (err) {
    console.log(err.message);
});