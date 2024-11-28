
a = 'Adnan';
var a ;
console.log(a); // Adnan
 
fn(); //    my name is Adnan
function fn(){
    console.log("my name is Adnan")
}


console.log(fn1(2,4))  // 6

function fn1(a,b){
    return a + b
}

// name(); not sport hosting in a function Expression

var name = function (){
console.log("This is not hosting sport");
}

name();


// var के साथ:
// Variables को memory में hoist किया जाता है लेकिन उनकी initial value undefined होती है।
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5



// Hoisting के कारण, var a सबसे पहले memory में allocate हो जाता है लेकिन इसकी value undefined होती है।
// जब a = 'Adnan' execute होता है, तब a को 'Adnan' assign किया जाता है।
// इसके बाद console.log(a) execute होता है, और output 'Adnan' होता है।

var a;       // Hoisting: a is declared and initialized as undefined
a = 'mujahid'; // Assignment
console.log(a); // Output: Adnan