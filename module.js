// CommonJS, every file is module (by default)
// Modules - Encapsulated (Only share minimum)
const names = require("./name-module");
const sayHi = require("./utils");
console.log(names);

const data = require("./alt-flavor");
console.log(data);

require("./add");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);