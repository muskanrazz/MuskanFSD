// ARROW FUNC
// return statement use krne ke liye {} bracket lgega

// let greet=()=>{
//     console.log("Hello Muskan");
// }
// greet();

// let calculateSum=(nums1, num2)=>{
//      let sum = nums1+ num2;
//      console.log(sum);
// }
// calculateSum(10, 20);

// let sqaureSum=(num1)=> num1*num1;
// let num2=console.log(sqaureSum(10));

// sqaureSum(num2)

function studentResult(hindi, english, math, science, sanskrit){
  let marks = hindi + english + math + science + sanskrit;
  let attendance = 50;
  let per= (marks)/5;
  return {attendance, per, marks};

}

let result = studentResult(80 , 90 , 75 , 85 , 91);
console.log("total marks", result.marks);
console.log("total attendance", result.attendance);
console.log("total percentage", result.per);
