/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {

  if (x < 0) {
      return false;
  }
  let number = x;
  let result = 0;

  while(number > 0){
      result = result * 10 + number % 10;
      number = parseInt(number / 10);
  }

  if(x === result) 
      return true
  else
      return false
};

var isPalindrome = function(x) {
  if (x < 0 || x % 10 == 0 && x !=0)  {
      return false;
  }
  let t = 0;
  while (x > t) {
      t = t * 10 + x % 10;
      x = Math.floor(x / 10);
  }
  return t==x || x==Math.floor(t/10);
};

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  var pal =x.toString()
 return pal === pal.split('').reverse().join('')

};