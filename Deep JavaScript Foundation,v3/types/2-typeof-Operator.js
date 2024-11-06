// Primitive data type ==>
var a;
console.log(typeof(a));  // undifind

var b = "1";
console.log(typeof(b));  // string

var c = 2;
console.log(typeof(c));  // number

var d = true;
console.log(typeof(d));  //boolean

var e = {};
console.log(typeof(e));  //object

var f = Symbol();
console.log(typeof(f));  // symbol

var g = 45n;
console.log(typeof(g));  // bigint

var h = null;
console.log(typeof(h)); // object


// // Non Primitive data type ==>
// var i = null;
console.log(typeof(i));  // object

var j = function(){};
console.log(typeof(j));  // function

var k = [1,2,3];
console.log(typeof(k));  // object


var a ;
var b ;

(console.log (a > b ? 300 : 200));


var c = 2;

var r = (typeof c == "string"? 1 : 0);

console.log(r);

// pehle zero ka type of number ayega
// phir ye jo number likha aayega
// wo string me hoga
// isiliye string
// aarha he

