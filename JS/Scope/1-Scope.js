//Global-Scope

var a = 'Name'
function fn() {
    var b = 'Adnan';
    console.log(a);
    console.log(b);
}
fn();

// Module-Scope

{
     let a = "Arbaaz";
     console.log(a);
}

// // Block-Scope

// //  let a = 'chouhan' => not run
{
    let d = 'Adnan';
    console.log(d);
    // console.log(a)=> not run
}
// console.log(d)=> not run


// // Function-Scope

function fn() {
    var a = 'Chouhan';
    console.log(a);
}
fn();

// // Laxical-Scope

var m = 'good '
function fn() {
    var k = 'boy '
    fn1()
    function fn1() {
        var t = 'is '
        fn4()
        function fn4() {
            var l = 'Adnan'

            console.log(m + k + t + l)
        }
    }
}
fn()