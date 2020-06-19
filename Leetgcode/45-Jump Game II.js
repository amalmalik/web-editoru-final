/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jumpCount = 0;
    var maxIdxCurrentJump = 0;
    var maxIdxNextJump = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        maxIdxNextJump = Math.max(maxIdxNextJump, i + nums[i]);
        if (i === maxIdxCurrentJump) {
            jumpCount++;
            maxIdxCurrentJump = maxIdxNextJump;
        }
    }
    return jumpCount;
};
 
