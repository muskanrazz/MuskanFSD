// TYPES OF FUNCTION

// ARROW Function
// DECLARATION FUNC
// EXPRESSION FUNC
// IIFE

// FUNC DECLARATION

// function functionName(){
// console.log();
// }

// let num1= 100;
// let num2=200;
// let sum= num1+num2;

// console.log(sum);

// let num3= 65;
// let num4=56;
// let sum1 = num3+num4;
// console.log(sum1);


// function calculateSum(num1, num2){ // parameter num1, num2 h
//     let sum = num1 + num2;
//     console.log(sum);
// }
// calculateSum(100, 200);  // arguments 100, 200 hai
// calculateSum(65, 56);

//DEFAULT PARAMETER
// function calculateSum(num1=10, num2=30){ // parameter num1, num2 h
//      let sum = num1 + num2;
//      console.log(sum);
//  }
//  calculateSum();  // arguments 100, 200 hai
//  calculateSum(50);
//  calculateSum(50, 40);
//  calculateSum(undefined, 40) // agr hme bs num2 ki direct value ko change krna ho then using undefined
//  calculateSum(undefined)


// RETURN KEYWORD
//ek func ke andar multipe return nh kr skte

// function calculateSum(num1, num2){
//     console.log("we r adding the two value");
//     return num1 + num2;
//     return num1; // IGNORE  
//     return num2;  // IGNORE

// }
// // console.log(calculateSum(10, 20));  // ye use nh krna hai
// let res = calculateSum(10, 20);
// console.log(res);


// OBJ
// function getUserDetail(){
//     let user={
//         name: "Muskan",
//         age: 20,
//         email: "muskanrazz006@gmail.com",
//         city: "Bhopal"

//     }
//     return user;
// }
// let userData = getUserDetail()
// console.log(userData);

// console.log(console.log("hello")); // hello print then one value will undefined


// HOW TO CONVERT FUNC DECLARATION INTO FUNC EXPRESSION
// let greet = function(){
//     console.log("Hello Muskan");
// }
// greet()

// function calculateSum(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }

//MAKE FUNC EXPRESSION
// let calculateSum=function(num1, num2){  // num1 & num2 ye parameters hai
//     let sum = num1 + num2;
//     console.log(sum);
// }
// calculateSum(15, 16);

// function helloJavascript(str){
// let count =0;
// let vowels= "aeiou";
// for(let i=0; i<str.length; i++){
//     if(vowels==str[i]){
//         count++;
//     }
// }
// return count;
// }
// function stringLength(str) {
//     return str.length;
// }

// let str = "Hello World";

// console.log("Length =", stringLength(str));
// console.log("Vowels =", vowels(str));
// console.log("Consonants =", countConsonants(str));

// function vowels(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||
//             str[i] == 'o' || str[i] == 'u' );{
//             count++;
//         }
    
//     }

//     return count;
// }


// function consonants(str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//             if (ch != 'a' && ch != 'e' && ch != 'i' &&
//                 ch != 'o' && ch != 'u');
//                 {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// function length(str) {
//     return str.length;
// }

// let str = "Hello";

// console.log(length(str));
// console.log(vowels(str));
// console.log(consonants(str));

function checkVowelConsonant(str){
    let total= str.length;
    let vowelCount=0;
    let consonantCount=0;

    for(let ch of str){
        if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u" ){
            vowelCount++;
        }
        else{
            consonantCount++;
        }
    }
    return {vowelCount, consonantCount, total};
}

let result = checkVowelConsonant("hello Javasript");
console.log(`Total length: ${result.total}`);
console.log(`Total length: ${result.vowelCount}`);
console.log(`Total length: ${result.consonantCount}`);