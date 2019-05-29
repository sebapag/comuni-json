'use strict';
/**  System require */
var cron = require('node-cron'),
    fs = require('fs');

/**  */
exports.convertData = function () {
    cron.schedule('0 10 10 * * *', function () {
        fs.readFile(__dirname + "/assets/comuni.json", 'utf8', function (err, data) {
            var tempObj = {};
            var dataJSON = JSON.parse(data);
            for (var item in dataJSON) {
                tempObj[dataJSON[item].nome] = dataJSON[item]
            }
            var myWriteObj = JSON.stringify(tempObj);
            fs.writeFile(__dirname + "/assets/comuni_json_format.json" , myWriteObj, 'utf8', function(){
                console.log("finish");
                debugger;
            }); 
        })
    })
}