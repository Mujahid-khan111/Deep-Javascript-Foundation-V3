var teacher = "kyle";
// when we use only let or const inside of curly braces he convertion block to scope.

{
    let teacher2 = "suzy";
    console.log(teacher2);
}
console.log(teacher);

//For Another Instance.
{
    let a = 10;
    let b = 20;
}
console.log(a, b);// Reference Error a and b is not defind. bcz whenever we use let and const instead of var in curly braces he makes that block scope and he restricts to use the outer scopes.
// here let is working as a blocked scope they restrict outside the block. where var is function scope it works outside the block.

{
    var a = 10;
    var b = 20;
}
console.log(a,b)// Done, bcz var has global scope and he's work outside the block.

var block = "Adnan";

{
    let block2 = "Arbaaz";
    console.log(block2);
}
console.log(block);

{
    let y = "Adnan";
    const x = "Chouhan";
}
console.log(y);
console.log(x);

const j = "Adnan";
{
    // console.log(j);
}

{
let k = "Adnan";
const u = "Chouhan";
console.log(k);
console.log(u);
}

{
    var A = 10;
    var B = 20;
}

console.log(A);
console.log(B);
