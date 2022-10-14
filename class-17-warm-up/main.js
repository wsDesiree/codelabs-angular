// Given two strings, return true if they are anagrams of one another.

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// If both strings are anagrams of each other than return true otherwise return false.


function isAnagram(first, second){
    if (string === isAnagram) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isAnagram("cinema", "iceman"); // true 
isAnagram("orange", "yellow"); //false

// Given two strings. One string representing a name. The second string representing a sentence.

// Return the count of how many times the name appears in the sentence.


function nameCount(name, sentence) {
    let words = sentence.split("");
    let count =0;
    let names = words.filter(element => element.includes(name))

    count = names.length
    console.log(count)
}

let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person,announcement ); // 3



function isAnagram(first, second){
    console.log(first.split("").sort().join === second.split("").sort().join());
}

isAnagram("cinema", "iceman"); // true 
isAnagram("organge", "yellow"); //false


function nameCount(name, sentence){
    let words =sentence.split("");
    let count =0;
    for(let i = 0; i < words.length;i++){
        if(words[i].includes(name)){
            count++;
        }
    }

    console.log(count)
}

let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person, announcement); // 3