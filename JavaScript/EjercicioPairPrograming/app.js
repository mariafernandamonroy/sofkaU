let arrayNumbers=[0,1]

function fibonacci(limitNumber){
  for(let i = 0; i < limitNumber; i++){
    let temp; 
    temp = arrayNumbers[i]+ arrayNumbers[i+1]; 
    arrayNumbers.push(temp);
  }
}

let limitNumber = prompt("Ingresa qué cantidad de números fibonacci deseas ver: ")
limitNumber = parseInt(limitNumber,10);

fibonacci(limitNumber);
console.log(arrayNumbers);