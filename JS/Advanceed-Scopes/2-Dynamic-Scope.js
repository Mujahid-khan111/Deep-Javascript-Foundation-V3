// It's Exist on other languages but not in JavaScript, It's theorically exist in JavaScript.
// Dynamic Scope aur Lexical Scope (ya Static Scope) ke beech ek badi difference hoti hai, 
// jo mainly is baat par depend karti hai ki variables ka resolution kaise hota hai:
// Lexical Scope: Variables ka scope unke code ke likhne ke place par

var teacher = 'Kyle';

function student(question) { 
    var teacher2 = 'Simon';
    console.log(teacher,question); // It's doesn't work lexically and dont pick up teacher from laxically, hes pickup from line no 10; In Dynamic Scope he checks where was function called from. and he is called from line no. 10 so he he will be pick teacher from that line.
}

function student2() {
    var teacher = 'Suzy';
    student('Desuza') // It checks where was student called from.
}
student2()

var a = "good";

function student(b){
    var c = "boy";
    console.log(a);
}

function student2(){
    var a  = "girl";
    student("is best");
}
student2();


