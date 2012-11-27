var obj = require('./case_garcia');

console.log(obj.a());
console.log(obj.b());

obj.a = function(){ return "C"; }
console.log(obj.b());