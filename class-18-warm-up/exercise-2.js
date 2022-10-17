function convertKiloToMiles(numKilo){
    return numKilo * 0.62137
}
let distanceFromHomeToSchool =convertKiloToMiles(1.2);
console.log(distanceFromHomeToSchool)

function convertKiloToMiles(){
    let userInput = document.getElementById("userInput").value;
    let conversion = convertKiloToMiles(userInput)
    ler conversionElem = document.getElementById("conversion");
    conversionElem.innerText = conversion
}