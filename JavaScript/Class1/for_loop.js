// this the the for of loop & it can't be print any index
// const arr=[1,2,3,4,5]
// for(let i of arr){
//     console.log(i)
// }


// difference of for in & for of :- In the for in loop that can print index also with value but in for of loop they can't
// this is the for in loop & it can be print index & value also
// const arr=[1,2,3,4,5]
// for(let i in arr){
//     console.log("hy my index is " + i+" " + "hy, my value is" + arr[i] )
//     // console.log(`Hi, my Index is ${i} and my value is ${arr[i]}`)
// }



// this the the forEach loop
// => this is the fat arrow func
// const arr=[1,2,3,4,5]

// arr.forEach(a =>{
//     console.log(a)
// })
// arr.forEach((a,i) =>{
//     console.log(i)
// })

const arr=[1,2,3,4,5]
const obj= {
    name: "Muskan",
    age: 20
}

for(let i in obj){
    console.log(i)
    console.log(obj[i])
}

// in for loop the typeOF is number
// we can use the for loop , forEach, ForOf loop for number
for(let i =0; i<=arr.length; i++){
    console.log(typeof(i))
}

//in InLoop the typeOF is string because it is made for object
// always the key is in string 
// we can't use the forIn loop for obj
for(let i in arr){
    console.log(typeof(i))
}