/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
/**
>> n: [int]sorted
>> t: int
<< int
 
binary search
    return inx 
    
compare InxVal to target return inx+/-1
    added edge cases if inx =0 || (left === mid && target<nums[mid])
*/
var searchInsert = function(n, target) {
    let left =0, right = n.length-1, mid =0
    
    while(left<=right) {
        mid = Math.floor((right-left)/2) + left
        if(n[mid] === target) return mid
        
        if(target < n[mid]) { 
            right = mid-1 
        } else {
            left = mid + 1
        }
    }
    
    if(target < n[mid]) {
      if(left === mid) {
        return mid
      } else if (mid === 0) {
        return 0
      } else {
        return mid-1
      }
    } else {
      return mid+1
    }
  };