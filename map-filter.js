const numbers = [41, 14, 52, 50, 74, 20];

// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }
//  const square = element => element * element;
//  const square = x => x * y;

//  const result = numbers.map(x => x * x)
// console.log(result);


const result = numbers.filter(x => x < 40);
const isYes = numbers.find(x => x > 41);
console.log(isYes);