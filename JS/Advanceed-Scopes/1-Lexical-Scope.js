// lexical scope => innner function check the value perent function ,
//  prent function dos'n not check inner function values 

// Lexical Scope ka matlab hai ki ek variable ka scope (yaani, us variable ko kaha se access kiya ja sakta hai)
// is baat par depend karta hai ki woh variable kis jagah par define kiya gaya hai,
// na ki kis jagah se function call ho raha hai. Iska doosra naam Static Scope bhi hai.

// Lexical ka matlab hai "code likhne ka structure" ya "source code ka layout".
// Ek inner function apne outer function ke variables ko access kar sakta hai, lekin 
// iska scope wahi hoga jo code ke likhne ke time par fix hota hai.


function outerFunction() {
    let outerVariable = "Hello from Outer!";

    function innerFunction() {
        console.log(outerVariable); // outerVariable ko access kar raha hai
    }

    innerFunction();
}

outerFunction();


var outerFunction = 'I am Outerfunction';
function parent1() {
    var child = 'Kyle';
    inner()

    function inner() {
        var child2 = 'Simson';
        inner2()

        function inner2() {
            var child3 = 'Eina';
            console.log(`${child} ${child2} ${child3} ${outerFunction}`)   // lexical scope bottom to top
        }
    }
}
parent1();


// function outerFunction() {
//     var outerVar = 'I am outside!';

//     function innerFunction() {
//         console.log(outerVar); // innerFunction apne lexical scope ke outerVar ko aceess kr skta he
//     }

//     innerFunction();
// }

// outerFunction();

