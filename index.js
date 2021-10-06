//1
function absoluteValue(num){
  if (typeof num == 'number') {
        if(num < 0){
            return -1*num;}
        
        else if(num >= 0) {
            return num; }
                    }
  else {
      return null;
        }
}




//2
function multiplesOfFourAndSix(arr){
    let hold = [];
    for(let i = 1; i <= 100; i++){
        if(i % 4  === 0 && i % 6 === 0){
            hold.push(i);
        }
    }return hold;
}
console.log(absoluteValue(-99))
console.log(multiplesOfFourAndSix())



