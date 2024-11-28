// diferents (==) & (===)
const num = 11;
console.log(num == 11); // true, (==) it's called looseEquality, checks only values is it same or not. 
console.log(num == '11') // true.
console.log(num === '11') // false, (===) it's called strictEquality, checks values along data types.
// (==) only compares primitives. if the value is non primitive it's gonna turn into a primitive.

// double Equal
var a = -2 == true;
console.log(a);  // false

var b = null === undefined;
console.log(b);  // false

var c = null == undefined;
console.log(c);  // true

var d = "10" == 10;
console.log(d);  // true

var e = {} == {};
console.log(e); // false

var f = [] == []; 
console.log(f); // false

var g = "" == [];
console.log(g);  // true

var h = "" == {};
console.log(h);  // false

var i = "0" == "-0";
console.log(i);  // false

var j = "1" == ["1"];
console.log(j); // true

var k = new Date ==  Date;
console.log(k); // false

var l = Math.ceil == Math.ceil;
console.log(l);  // true

var m = null == undefined;
console.log(m); // true

var n = [] == {};
console.log(n);

