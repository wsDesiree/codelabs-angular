let name = "Amy"

function updateNames(name) {
    let sentence = "Hello, my name is John. My friend's name is also John.";
    // Build your logic here
    return sentence.replaceAll('John', name)

  }
 const n = updateNames(name); // "Hello, my name is Amy. My friend's name is also Amy."
 console.log(n)



(function () {
  let sentence = "My name is John!";

  function reverse(str) {
    // Build your logic here
    let newStr = "";
    for (let i = sentence.length - 1; i >= 0; --i) {
      newStr += str[i];
    }
    return newStr;
  }

  const r = reverse(sentence);
  console.log(r); // "!nhoJ si eman yM"
})();
