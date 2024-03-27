

//1. Function Defination

//Function name are alway writtern in camleCase
function myFunctionA(n){ // n is a formal argument
    //function body
    console.log('Hello '+n+' How are you?');

    //function returning somthing
    return n;
}

//2. Function Calling
let x = myFunctionA('Anil Dollor'); // Anil dollor is a actual argument

console.log();

//1. Function Defination

//Fat Arrow Functions

let myFuncionC = (name)=>{
    console.log('Hello '+name+' How are you?');
}

//.2 Function Calling

myFuncionC("Nadan Kabra");



// Spread/Copy Operator
let a = ['Anil',"Nadan","Kiran"];

console.log(a);

//array.lenth
//object.member
console.log(a.length);

let b = [...a,"Ritik","Abhishek","Aviansh B","Avinash C","ShivKanya"];


console.log(b);


//An arrow function expression is a compact alternative to a traditional 

let aa = ['Hello Good morning']
let x1 = ["An",...aa,"arrow",...aa];
let y = [...x1,"function"];
let z = [...y,"expression"];
let z2 = [...z,"is"];

console.log(z2);

var paragraph='';
for(var i=0; i<z2.length;i++){ // array.length
    //console.log(z2[i]);
    //paragraph = paragraph + z2[i]+' ';  Not Optimized Slow
    paragraph += z2[i]+' ';  // Optimized Fast
}
console.log(paragraph);