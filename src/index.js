module.exports = function getZerosCount(number, base) {
  // your implementation
  // находим наибольший простой числитель для системы счисления 
  function largeSimpleNumb(n){
      var i=2;
      while (i<=n){
          if (n%i == 0){
              n/=i;    
          }else{
              i++;
          }
      }
      return(i);
  }
  var largestNumb = largeSimpleNumb(base);
  var secondNumb = base/largestNumb;
        
  // проверяем степень наибольшего простого делителя в СИ
  var indexLarge=1;
  if (secondNumb%largestNumb !==0){
      indexLarge = 1;
  } else {
              var rem = base;
              indexLarge = 0;
              while (rem % largestNumb == 0){
                  indexLarge++;
                  rem = rem / largestNumb;
              }
          }
      
  
  
  // проверяем второе числительное
  var indexSecond = 1;
  if (secondNumb % 2 !=0){
      indexSecond = 1;
  } else {
      var remSec = base/ largestNumb;
              indexSecond = 0;
              while (remSec % 2 == 0){
                  indexSecond++;
                  remSec = remSec / 2;
              }
  }
  
  var sqrtIndex = 1;
  var tempSumLarge = 0;
    
  while (Math.pow(largestNumb, sqrtIndex)<= number) {
      
      var sum = Math.floor(number/Math.pow(largestNumb, sqrtIndex)); 
      tempSumLarge += sum;  
      sqrtIndex++;
      
  } 
  var sqrtSecondIndex = 1;
  var tempSumSecond = 0;
  while (Math.pow(2, sqrtSecondIndex)<= number) {
      
      var sumSecond = Math.floor(number/Math.pow(2, sqrtSecondIndex)); 
      tempSumSecond += sumSecond;  
      sqrtSecondIndex++;     
      
  } 
  
  
  if (tempSumLarge/indexLarge < tempSumSecond/indexSecond){
      return Math.floor(tempSumLarge/indexLarge);
  } else {
      return Math.floor(tempSumSecond/indexSecond);
  }
}