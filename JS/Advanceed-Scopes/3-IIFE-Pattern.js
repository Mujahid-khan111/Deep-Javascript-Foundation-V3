// // IIFE (Immediately Invoked Function Expression) JavaScript ka ek special function hota hai jo 
// // turant execute ho jata hai jaise hi wo define hota hai. Iska use zyada tar encapsulation 
// // aur scope isolation ke liye hota hai.

// // IIFE is an expression. (IMMEDIATE INVOKED FUNCTION EXPRESSIION), When we need Immediately a scope or function expression we can be used IIFE.

(function () { // It's an function expression bcz he starting with the parent hes is not with function keyword.
    console.log('This is initial str');
})();

//    // Another instance.

// var teacher = 'Kyle';
//  (function anotherTeacher() {
//     var teacher = 'suzy';
//     console.log(teacher)
//  })();

// paramitor ke shat use

// (function(name) {
//     console.log(`Hello, ${name}!`);
// })("Ayana");


//     // with unary operator.

const IIFEfunc= -function (a,b) {
    return a;
}(5);
console.log(IIFEfunc); //-5

const IIFEfunc2 = !function (a,b) {
    return a;
}(5);
console.log(IIFEfunc)
console.log(+true)
console.log(+false)
console.log(-null)
console.log(-[undefined]);

// // Also we can use try and catch for error handeling. 

// var teacher;
// try{
//     teacher = fetchTeacher(1);
// }
// catch(err){
//     teacher = 'jemes'
// }
// console.log(teacher)

//     // IIFE with try and catch

// var teacher= (function getTeacher(a){ 
//     try {
//        return fetchTeacher(1);
//     }
//     catch(err){
//     return `Sams ${a}`
//     }
//     })(5);
// console.log(teacher);

// (function () {
//     console.log('my name is mujahid gurjar')
// })
// (); // anonymous function expression


//  var teacher = 'Kyle';
//  (function anotherTeacher() {
//     var teacher = 'suzy';
//     console.log(teacher)
//  })
//  (); // anontmous name function expression



// Yaha par: EX = 1

// 1=> Function Expression: (function() { ... }) ek function hai jo parenthesis ke 
//     andar wrap kiya gaya hai.
// 2=> Invoke karna: () se is function ko immediately execute kiya jata hai.

(function () {
    console.log("Hi I am IIFE function"); //yeh IIFE turant execute hota hai!
})();


// 2 =>
// Use Cases:
// Encapsulation: Variables jo IIFE ke andar hain, 
// wo global scope ko pollute nahi karti hain.

(function () {
    let secret = "yeh secret hai!";
    console.log(secret); // yeh secret hai!

})();

// console.log(secret);//ReferenceError: 


// Asynchronous Code: 
// Callback functions ko encapsulate karne ke liye use hota hai.


(function () {
    for (var i = 0; i < 5; i++) {
        (function (j) {
            setTimeout(function () {
                console.log(j);
            }, j * 1000);
        })(i);
    }
})();

// Module Pattern: IIFE ko use karke private variables aur functions ko isolate karte hain:

var Module = (function() {
    var privateVar = "😊 Yeh private hai 😊 ";
    function privateFunction() {
        console.log(privateVar);
    }

    return {
        publicFunction: function() {
            privateFunction();
        }
    };
})();

Module.publicFunction(); // Yeh private hai

// Advantage:

// Global Namespace Pollution se bachaata hai.
// Code ko immediately execute karna possible banata hai.
// Encapsulation aur Modularization ko promote karta hai.
