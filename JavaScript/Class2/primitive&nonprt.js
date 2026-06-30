// in non-primitive when we copy the variable then copied address;
let user ={
    name:"Muskan"
}
let user2 = user;
user.name="Kumari"


// in primitive when we copy the variable then copied value;
console.log(user.name)

let a= 10;
let b= a;

b=20;
console.log(a)
console.log(b)