var teacher = "kyle";

function ask(question){
    console.log(this.teacher,question)
}

function askAgain(question){
    "use strict"
    console.log(this.teacher,question);
}

ask("what's the non-strict-mode default?");

// askAgain("what's the strict-mode default?")