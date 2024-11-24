


var teacher = "mujahid";

function ask(question) {
    console.log(this.teacher, question);  // In (this) keyword its not matter where i call it from its matter how i call it.
};

function otherClass() {
    var myContext = {
        teacher: "suzy"
    };  // Explicit Binding because of call method.
    ask.call(myContext, "Why"); // In Mycontxt there is a variable and thats gonna be add into ask function bcz i sent it in ask function using call.   
};
otherClass();


// function fn() {
//     console.log(this)
// }
// fn()

// var a = {
//     name: 'Adnan',
//     lastname: "Chouhan",

//     fun: function () {
//         // console.log(this);
//         console.log(this.name + ' ' + this.lastname);
//     }
// }
// a.fun();


// var student = {
//     id : 1,
//     name : "Adnan chouhan",
//     subject : "BCA",
//     college : "M.U.A.J University",
//     address : "5v the road",

//     fu : function (){
//         console.log(this);
//         console.log(this.id + " " + this.name + " " + this.subject + " " + this.college + " " + this.address);
//     } 
// };

// student.fu();



// this keyword =>

// this keyword us object ko refer karta hai jo currently active hai, ya jisme abhi code execute ho raha hai.
// Yeh basically us environment ya context ki baat kar raha hota hai jahan se this use kiya ja raha hai.

//  1 => global context may this  => 

// Jab this global scope mein use hota hai, to yeh global object ko refer karta hai.
// Browser mein, global object window hota hai.
// let name = "mujahid"
// console.log(this.name);  // Browser mein output hoga: window object
// console.log(this);  // Browser mein output hoga: window object

// const person = {
//     name: 'Mayank',
//     greet: function() {
//         console.log(this.name);
//     }
// };



// person.greet();  // Output: Mayank

// Constructor functions mein this naya object refer karta hai jo us function ke through create hota hai.  

function employee(name, age) {
    this.name = name;
    this.age = age;
}

let emp1 = new employee('mujahid', 21);
console.log(emp1);

function com(name , age , sallry){
    this.Name = name;
    this.age = age;
    this.sallry = sallry;
}

let com1 =  new com('mujahid' ,22,10000);
console.log(com1);

let com2 =  new com('adnan ',22,10000)
console.log(com2);


let emp2 = {
    name: "mujahid",
    age: 20
}

// console.log(emp2);
// console.log(emp2);
// console.log(emp2);
