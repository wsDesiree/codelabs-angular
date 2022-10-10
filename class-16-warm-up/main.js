// Given numbers 0 - 100;

// For every number that is a multiple of 3,
// log to the console "Fizz".
// For every number that is a multiple of 5,
// log to the console "Buzz".
// For every number that is a multiple of 5 and 3,
// log to the console "Fizz Buzz".
// function multiplesof(numbers, number){
//     const multiples = [];
    
//     if (let i = 0; i = numbers.length; i++) {
        
//     } else {
//         if (numbers[i] % multiples === 0){
//             multiples.push(numbers[i]);
//         }
//     }
//     const multiplesof = (numbers, multiple) =>
//     return  numbers.filter(x => x % multiple === 0);
    
// }
// console.log(multiplesof([0 < 100]));


for (let i = 0; i<= 100; i++){

    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, "Fizz Buzz")
    }else if (i % 3 == 0){
        console.log(i,"Fizz")
    }else if( i % 5 == 0){
        console.log(i,"Buzz")
    } 
}