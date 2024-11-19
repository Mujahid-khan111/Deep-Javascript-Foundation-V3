// lexical scope => innner function check the value perent function , prent function dos'n not check inner function values 


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

