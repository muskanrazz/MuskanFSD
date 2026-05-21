// const arr= [1,2,3,4,5, true, "Muskan", "Bhoapal", [6,7], {"name": "muskan"}]
// console.log(arr[parseInt((arr.length-1)/2)])

const obj= {
    name: "Muskan",
    age: 20,
    isActive: true,
    address:{
        district:"Madubani",
        city: "Bihar",
        pincode:847211,
    },
    hobbies:["dance"]
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.address.pincode)
console.log(obj['address'])
console.log(obj['address']['pincode'])


const arr =["apple", "mango", "lichi"]
for(let i=arr.length; i>=0; i--)
    console.log(arr[i])




// const arr= [1,2,3,4,5]
// const sum= arr [1]+ arr[(arr.length-2 )]
// console.log(sum);


// dot notation-- it can acess object's property

