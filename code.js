/*
//basic console.log output
console.log("Hello World!");

let  favFruit = "Grapes";
let favIceCream = "Chocolate";
let favProgLanguare = `JS`;

let numberOfDonuts = 12;
let pi = 3.14;

let veryLargeNumber = 2432432412n; //bigint

let lovesCoding = true;

let favColor; 
console.log(favColor); //undefined

favFruit = null; // we do this to explicitly clear a value from a variable 

const uniqueKey = Symbol(); //it is object data type

let course = {
    name: "JS for frontend",
    hours: 3
}; 




//JS is dynamically typed. 
let firstName = "Ajay";
firstName = 100;
console.log(firstName);


//Objects
let course={
    name: "JS",
    hours: 3
}
console.log(course);
console.log(course.name);
console.log(course["name"]);

let worked = "hours";
console.log(course[worked]);



//arrays
let productColors = ['blue', 'green'];
console.log(productColors[0]); 

console.log(productColors.length); //2 



//function

function sayHi(name){
    console.log("Hi "+ name);
}

sayHi("Ajay");



//loose equality operator

let a=2;
let b = '2';
console.log(a==b); //return true

//Strict Equality operator
let a=2;
let b = '2';
console.log(a===b); //return false


//For in operator
const course = {
    name: 'JavaScript',
    duration: '3',
    section: 10
};

for(const key in course){
    console.log(course[key]);
}



//for of operator

let numbers = [1,2,3,4,5];
for(let number of numbers){
    console.log(number);
}


//function literals

const dog = {
    name: "Max",
    age: "5"
    eat:function(){
        console.log("champ!");
    }
    bark(){
        console.log("woof!");
    }
}



//factory function
function getDog(name, breed, age){
    return{
        name, // which means name:name, 
        breed,
        age,
        eat(){
            console.log("Champ!");
        }
    }
}

const anotherDog = getDog("Harley", "Lab", "3");
console.log(anotherDog);



function Dog(name, breed, age){
    //this = {};

    //Add peroperties to this
    this.name = name;
    this.breed= breed;
    this.age = age;
    this.eat = function(){
        console.log(this.name + " : Champ!");
    }

    //return this;
}
delete  Dog.breed;
const anotherDog = new Dog("Harley", "Lab", 3);

console.log(anotherDog);
console.log(Dog);



let newObj = {} // it is same as let newObj = new Object();



//Functions are objects
function add(n1,n2){
    return n1 + n2;
}

const n = add;

console.log(n(2,2));
//console.log(add.length); //2




const Programmer = new Function('name', `
    this.name=name;
    this.writeCode=function(){
    console.log("Code in JavaScript");
    }
`);

const newProgrammer = new Programmer("Steven");

newProgrammer.writeCode();



//Objects values are copied by reference
let a = { value:20};
let b = a;

a.value = 100;

console.log(a);//100
console.log(b);//100


 //Enumerating Properties of an Object
 const dog = {
    name:"Max",
    age: 5,
    eyeColor:"blue"
 };

 const keys= Object.keys(dog);
 const values = Object.values(dog);
 console.log(keys);
 console.log(values);

 const entries = Object.entries(dog);
console.log(entries);



let a = { value: 10};
let b = {};
Object.assign(b,a);

//instead of Object.assign(b,a) we can write let b= { ...a };

b.value = 20;

console.log(a); //10
console.log(b); //20




const name = "Ajay";
console.log(typeof name); // string

const anotherName = new String("Ajay");
console.log(typeof anotherName); // Object

let sentence = "A new sentence";

const doesIncludeNew = sentence.includes('new');
console.log(doesIncludeNew);

const startWithA = sentence.startsWith('A'); //true
console.log(startWithA);//true

const endsWithA = sentence.endsWith('A'); //false
console.log(endsWithA);//false

let updateSentence = sentence.replace('new','short');

let trimmedSentence = sentence.trim();

const wordsInSentense = sentence.split(' ');

let email = 'TestEmail@gmail.com';

let lowerCaseEmail = email.toLowerCase();

let upperCaseEmail = email.toUpperCase();



//TemplateLiterals: helps us use the string interpolation instead of String Concatenation
let fName = "Ajay";
let lName = "Alle";
//let fullName = fName + " " + lName;

let fullName = `${fName} ${lName}`;
console.log(fullName);



//The Date Object
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getTimezoneOffset());



 const numbers = [1,2,3,4,5,2];
 //numbers.push(6,7,8); 
 // numbers.splice(1,1,24,25);
 const indexOfThree = numbers.indexOf(2);
 const lastIndexOfThree = numbers.lastIndexOf(2);
 const indexOfTen = numbers.indexOf(10);
 console.log(indexOfTen);
 console.log(indexOfThree);
console.log(lastIndexOfThree);
 console.log(numbers);
 
 if(indexOfTen ===-1){
    console.log("10 is not found in the array");
 }

 if(numbers.includes(10)){
    console.log('10 is found in the array');
 }
  


 const employees = [
    {
        id:1,
        name:'Jim'
    },
    {
        id:2,
        name:'Sim'
    },
    {
        id:3,
        name:'Tim'
    }
 ]

const employee = employees.findIndex(function(e){
    return e.name ==="Jim"
});

// const employee = employees.find((e) => e.name ==='Jim');
console.log(employee);


//Arrow functions: 
const add = (num1, num2) => num1 + num2;

console.log(add(2,3));

 

const num = [1,2,3,4,5];

const lastElement = num.pop();
console.log(lastElement);

const firstElement = num.shift();
console.log(firstElement);

const middleElement = num.splice(1,1);
console.log(middleElement);

//emptying an array
num.length = 0;
console.log(num);


//Sorting the objects
let employees = [
    {id:1, name:"Aj"},
    {id:2, name:"Sam"},
    {id:3, name:"Jack"}
]

employees.sort((a,b) => {
    const lowercaseA = a.name.toLowerCase();
    const lowercaseB = b.name.toLowerCase();
    if(lowercaseA<lowercaseB) return -1;
    if(lowercaseA>lowercaseB) return 1;
    return 0;
});
console.log(employees);



//every: checks if all the elements are valid
const numbers = [2,4,6,8,10];
const areAllEven = numbers.every(number => {
    return number % 2 === 0
});
console.log(`are all even  ${areAllEven}`);

//some: atlest if one element satisfies the scenerio


//filtering an array:
const numbers = [1,2,3,4,5,6];
const evenNumbers = numbers.filter(number => number % 2 ===0);
console.log(evenNumbers);


const employees = [
    {id:1, name:'Alice',role: "Developer"},
    {id:2, name:'Adam',role: "Designer"},
    {id:3, name:'Alex',role: "Developer"},
    {id:4, name:'Alley',role: "Designer"}
]
const developers = employees.filter(employee => employee.role==="Developer");
console.log(developers);




//mapping an array

const numbers = [2,4,6,8,10];
const squaredNumbers = numbers.map(num => num* num);
console.log(squaredNumbers);

const characters = ['a','b','c','d','e'];
const upperCharacters = characters.map(char => char.toUpperCase());
console.log(upperCharacters);



const employee =[
    {id:1, name:'Alice', email:'Alics124@gmail.com'},
    {id:2, name:'Sam', email:'Sam12123@gmail.com'},
    {id:3, name:'James', email:'James1374@gmail.com'}
];

const updateEmployees = employee.map(employee =>
    ({...employee, email:employee.email.toLowerCase()

}));
console.log(updateEmployees);
console.log(employee);




//Hoisting:

add(2,3);

//using function declaration, it will work
function add(a,b){
    console.log(a+b);
}
 
//using function expression, it will not work and gives an error
let add = function(a,b){
    console.log(a+b);
}
    */

