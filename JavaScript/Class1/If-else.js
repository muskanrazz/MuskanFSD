const english =  Number(prompt("Enter marks in English"))
const hindi = Number(prompt("Enter marks in hindi"))
const Math =Number(prompt("Enter marks in Math"))
const Science =Number(prompt("Enter marks in Science"))
const sst =Number(prompt("Enter marks in sst"))

const sum = english + hindi + Math + Science + sst;
const per = sum/5;

// const per = -1;
if(per>=95 && per<=100){
    console.log("O")
}
else if(per>=90 && per<95){
        console.log("A+")

}
else if(per>=85 && per<90){
        console.log("A")

}
else if(per>=80 && per<50){
        console.log("B")

}
else if(per>=50 && per>=0){
     console.log("fail")
}
else{
    
        console.log('not valid')

}
