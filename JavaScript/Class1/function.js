// // there is two types of func:-
// // 1. independent func
// // 2. parameter dependent func


// greet()

// function greet(){
//     const a ='Hello Everyone'
//     return a;
// }
// const x = greet()
// console.log(x)




// function add(a, b){
//     console.log(a+b);
// }
// add(2,3)

// function sub(a, b){
//     console.log(a-b);
// }
// sub(3,2)

// function evenOdd(a){
//     if(typeof a=='Number'){
//     if(a%2==0){
//         console.log('even');
//     }
//     else if(a%2==1){
//         console.log('odd');
//     }

//     else{
//         console.log('provide no. to check evenOdd');
//     }
//     }
// else{
//        console.log('provide no. to check Number');
// }
// }
// evenOdd('Muskan')

// function mult(a,b){
//     console.log(a*b)
// }
// mult(5,2)



// function div(a,b){
//     console.log(a/b)
// }
// div(2,2)

// const arr=[1,2,3,4,5,false];

// function checkOddEvenArr(){
//     const n = arr.length;
//     for(let i=0; i<n; i++){

//        if(i==0){
//             console.log(`The number ${i} is neither even neither odd`)
//         }
//         else{
//       if(i%2==0){
//         console.log(`The number ${i} is even`)
//       }
//       else if(i%2==1){
//         console.log(`The number ${i} is odd`)
//       }
//       else{
//         console.log('Hello')
//       }
//     }
//   }
// }
// checkOddEvenArr(arr)


// function greet(){
//     const a ='Hello Everyone'
//     return a;
// }

// function greet(){
//     const a ='Hii Everyone'
//     return a;
// }
// console.log(greet())


// output is hello everyone & undefined because it will not return anything so undefined
// const x = function greet(){
//     const a ='Hello Everyone'
//     console.log(a)
// }
// console.log(x())

// let greet = () => {
//     console.log('Hello Everyone')
// }


// var greet = () => {
//     console.log('Hello')
// }

// greet()

// var greet = () => {

//     console.log('Hello Everyone')
// }


// var greet = () => {
//     console.log('Hello')
// }

// greet()


// const arr= [1, 2, true, "muskan", 5, 6, {name: "muskan"}, [7, 8]]

// function checkTypeOf(x){
//      if(typeof x=='object' && x.length>0){
//     for(let i of x){
//      console.log(`Type of ${JSON.stringify(i)} is ${typeof i}`)
//     // console.log(typeof(i))
// }
// }
// }
// checkTypeOf(arr)




//jo obj string ban chuka h usko phir se obj banane ke liye parse use krte h 
// const arr= [1, 2, true, "muskan", 5, 6, {name: "muskan"}, [7, 8]]

// const a =JSON.stringify(arr)
// // const d =JSON.parse(a)

// // console.log(JSON.stringify(arr))
// console.log(typeof(a))


// const arr =[1, 2, 3,4,5,]c
// const arr1=[6,7,8,9]

// const x= arr.concat(arr1)
// // arr.concat(arr + arr1)
// console.log(x)


// const arr=[1,2,3,4,5]
// const arr1=[6,7,8,9]

// const y = [...arr, ...arr1] // this called spread operater (copy the array)
// // for(let i =1; i<arr.length; i++){
// // const y = arr +" "+ arr1
// console.log(y)

// const arr =[1,2,3,4,5]  //the concept is destructuring
// const [x,y, ...rest]=arr  // this the the rest operator 
// console.log(rest)


// const arr =[1,2,3,4,5]  //the concept is destructuring
// const [x,y, ...rest, z]=arr  // this is wrong because it's already fetched till last index
// console.log(rest)

const obj = {
    name:"muskan",
    age:20
}

const obj1 = {
    district:"mdb",
    pincode:847211
}

console.log()