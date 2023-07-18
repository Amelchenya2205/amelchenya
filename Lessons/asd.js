let arr = [1];

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
console.log(arr.reduce((sum, current) => sum + current))



function getNameActorDuration(element){
    const name = element.querySelector(…);
    …
    console.log(name, …);
  }