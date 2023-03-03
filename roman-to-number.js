/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  if(s.length < 1 || s.length > 15){
      return false
  }

  function getNumber (sym) {        
      const symbol = {
          "I": 1,
          "V": 5,
          "X": 10,
          "L": 50,
          "C": 100,
          "D": 500,
          "M": 1000
      }
      return symbol[sym];
  }
  
  let total = 0
  let current
  let previous
  for(var i = 0; i < s.length; i++){
      current = getNumber(s[i])
      next = getNumber(s[i+1])
      if(current < next){
          total -= current;
      }
      else {
          total += current
      }
  }

  return total; 
};