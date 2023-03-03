// # Intuition
// <!-- Describe your first thoughts on how to solve this problem. -->

// # Approach
// <!-- Describe your approach to solving the problem. -->

// # Complexity
// - Time complexity:
// <!-- Add your time complexity here, e.g. $$O(n)$$ -->

// - Space complexity:
// <!-- Add your space complexity here, e.g. $$O(n)$$ -->

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function twoSum(nums, target) {
  let numObj = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (numObj[complement] !== undefined) {
        return [numObj[complement], i];
      }
      numObj[nums[i]] = i;
    }
  }

  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for(var i = 0 ; i < nums.length ; i++){
      var n = nums[i];

      if(map[target-n] >= 0){
          return [map[target-n],i]
      } 
      else {
          map[n] = i;   //use map to store the value and index position
      }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
  const map = {}
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    const complement = target - element
    if (map[complement] !== undefined) {
      return [map[complement], index]
    } else {
      map[element] = index
    }
  }
  return []
}