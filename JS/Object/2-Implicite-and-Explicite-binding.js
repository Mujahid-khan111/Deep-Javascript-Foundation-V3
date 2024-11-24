// Binding Means Use a function in an object & use an object in a function.

// function ask(question) {
//     console.log(this.teacher,question) 
// }

// var workshop1 = {
//     teacher : 'Kyle',
//     ask,
// }; 

// var workshop2 = {
//     teacher : 'Suzy',
//     ask,
// };

// workshop1.ask("This Is Implicit Binding") // Implicit Binding;
// workshop2.ask("This Is Implicit Binding")
// // 
// ask.call(workshop1,'This is Explicit Binding') // Explicit Binding;
// ask.call(workshop2,'This is Explicit Binding')


function myFunc() {
    console.log(obj.name)
}

const obj = {
    name: 'Kyle',
    myFunc,
}

obj.myFunc() // Implicit Binding;


function myFunc2() {
    console.log(obj2.name)
}

const obj2 = {
    name: 'Simpson',
    myFunc2,
}

myFunc2.call(obj2); // Implicit Binding;


function fn1() {
    // console.log(obj1.name , obj1.lname)
}

const obj1 = {
    name: 'mujahid',
    lname: 'Gurjar',
    fn1,
}
obj1.fn1(); // implicit


function fn3() {
    console.log(ex.fname, ex.lname)
}
const ex = {
    fname: 'mujahid',
    lname: 'Gurjar',
    fn3,
}
fn3.call(ex)// Explicit


const Student = {
    name: "mujahid", sayName: function () {
        console.log(`my name is ${this.name} `);
    },
};

Student.sayName();