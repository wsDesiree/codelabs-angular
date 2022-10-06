let numbers = [];
// Push numbers 0 - 50 into this array. Use the push method to do this.
// Hint. Using a loop will be a good use case in this scenario.
// Use the built in array method filter to filter out even numbers of the array.

// From there, add each and every number from the array.

for(let i = 0; i <= 50; i++)(
    number.push(i)
)


numbers = numbers.filter((num)=>{
    return num % 2 != 0;
})
console.log(numbers)