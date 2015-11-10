var fs = require('fs');
fs.readFile('../testoutnoname.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    //console.log(data);
    var jsonObject = JSON.parse(data);
    console.log(jsonObject);

});




//jsonObject.
//console.log(jsonObject.toString().substr(0, 100));
