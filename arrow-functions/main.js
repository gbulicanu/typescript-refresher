var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
log("from log function");
doLog("from log arrow function");
