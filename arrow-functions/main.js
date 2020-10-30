var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var doLog2 = function () { return console.log("Log2"); };
log("from log function");
doLog("from log arrow function");
doLog2();
