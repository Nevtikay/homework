// Задание 1
function getArrayParams(arr) {
    let min = 100, max = -100, sum = 0, avg = 0;
    for ( let i = 0; i < arr.length; i++) {
      if ( arr[i] < min ) {
        min = arr[i];
      } if ( arr[i] > max ) {
        max = arr[i];
      }      
      sum += arr[i];
    }
    
    avg = sum / arr.length;
    avg = avg.toFixed(2);
    avg = Number(avg);
    return { min: min, max: max, avg: avg };
  }

  // Задание 2
function worker(arr) {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  } 
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for ( let i = 0; i < func.length; i++) {
    if ( func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
    
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = 100, max = -100;
  let difference = 0;
    for ( let i = 0; i < arr.length; i++) {
      if ( arr[i] < min ) {
        min = arr[i];
      } if ( arr[i] > max ) {
        max = arr[i];
      }      
      difference = min - max;
      difference = Math.abs(difference);
      
    }
  
    return `Разность 2 чисел = ${difference}`;
}