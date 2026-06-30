function sayHello(){
    console.log("Hello Students");
}
sayHello();


// NOW IIFE FUNC IS NOT USING TOO MUCH
// WE CAN USE THE IIFE FUN IN STARTING TO CONNECT THE DATABASE OR AUTHENTICATION
// IT CAN RUN ONLY ONE TIME
(function(){
    console.log("Hello");
})
();

(function(name){
    console.log("Hello", name);
})
("Muskan");

(function(a, b){
    console.log(a+b);
})
(10, 20);
