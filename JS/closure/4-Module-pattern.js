// Module is used to design pattern and used to wrap a set of variables and functions together in one scope.
// It's used to define object which is accessed variables and functions from outer scope.

function employes() {
    var name = 'Mayank';
    var age = 30;
    var designation = 'Developer';
    var salary = 70000;

    return {
        name : name,
        age : age,
        designation : designation,
        salary : salary,
    };
}
const details = new employes();
console.log(details);

function student(){
    var Id = 111;
    var Name = "mujahid";
    var Age = 21;
    var work = "Devloper";

return {
    Id : Id,
    Name : Name,
    Age : Age,
    work : work,
};
}

var studentDetails = student();
console.log(studentDetails);

