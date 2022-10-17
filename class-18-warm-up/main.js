
// Create a function that filters a list of users 
// whose confirmation_email property is ONLY set to true. 
// User the built in filter method to do just this.

let users = [
    {
      username: "John123",
      confirmation_email: true
    }, 
    {
      username: "Amy123",
      confirmation_email: false
    },
    {
      username: "Jamie123",
      confirmation_email: true
    }
  ]
let confirmedUsers = users.filter((user)=>{
  return user.confirmation_email === true
})
console.log(confirmedUsers)

// let result = username.filter(checkEmail);

// function checkEmail(username){
//   return username >= true;
// }

//   Expected result: let users = [ { username: "John123", confirmation_email: true }, { username: "Jamie123", confirmation_email: true } ]

// Define a function that will convert a number (kilometers) into miles.

// Bonus
// Add an input field and allow the user to enter a number. Allow the user to submit the number to be convereted into miles.

// Include the result onto the webpage.