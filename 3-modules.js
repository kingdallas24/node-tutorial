const names = ({ john, peter } = require("./4-names"));
const sayHi = require("./5-utils");
const flavor = require("./6-alternative-flavor");
require("./7-mind-grenade");
console.log(names);

sayHi("susan");
sayHi(john);
sayHi(peter);
