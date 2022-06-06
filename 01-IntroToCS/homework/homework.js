'use strict'

function BinarioADecimal(num) {
  var decimal = 0;
  for (let index = 0; index < num.length; index++) {

  decimal = decimal+num[index]*2**(num.length-1-index);

  }
  return decimal;

}

function DecimalABinario(num) {
  var array =[];
  while(num>0){
    array.unshift(num%2);
    num = Math.floor(num/2);
  }
    return array.join('');
}
  
  
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}