let log = function(message) {
    console.log(message);
};

let doLog = (message) => console.log(message);
let doLog2 = () => console.log("Log2");

log("from log function");
doLog("from log arrow function");
doLog2();