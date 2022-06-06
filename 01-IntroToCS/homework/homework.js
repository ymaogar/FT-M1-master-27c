'use strict'

function BinarioADecimal(num) {
  var decimal = 0;
  for (let index = 0; index < num.length; index++) {
    decimal = decimal+num[index]*2**(num.length-1-index);
    
  }
  return decimal;
  }



function DecimalABinario(num) {
  // tu codigo acahgfhgfh

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}