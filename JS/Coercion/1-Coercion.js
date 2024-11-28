// Coercion ==> Implicit Coercion, Explicit Corersion

// Explicit Coercion
// data ka type auto matic conversion jo javascript khud se krta he
let a = 10;
console.log(String(a));  // "10";

let result = "5" + 10;
console.log(result);

let subtraction = "5" - 2;
console.log(subtraction);




// Implicit Coercion data type ko manualy bdlna typcasting 
let b = 10;
console.log(`${b}`); // "10"


let c = "123";
let num = Number(c);
console.log(num);


let numstr = String(211); // number ko string me bdlna
console.log(numstr); // '211'


let bool = Boolean(0); // 0 ko Boolean me bdlna
console.log(bool);

let boole = Boolean(1); // 1 ko Boolean me bdlna
console.log(boole);




