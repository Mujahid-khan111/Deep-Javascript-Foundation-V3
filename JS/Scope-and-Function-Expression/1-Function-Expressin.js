// function declaration() { } // Function Declaration.

// const expression = function() { // Function Expression.
    
// }

// const anonymous = function fn() { // anonymous function expression.
    
// }


function declaration(a,b){
    return a + b;
}

console.log(declaration(10,20)); // this is function declaration

const expression = function (a,b){
    return a - b;
}

console.log(expression(10,5));  // this is function expression


const anonymous = function anon(a,b){
    return a * b;
} 

console.log(anonymous(10,10));