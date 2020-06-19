var threeSum = function(nums) {
    
    var result = [];
    
    nums.sort((a,b) => a-b);
    console.log(nums);
    
    for(var i=0;i<nums.length-2;i++) {
        
        if(i===0 || i > 0 && nums[i] !== nums[i-1]) {
            
            var target = 0 - nums[i];
            var start = i+1;
            var end = nums.length-1;
            
            while(end > start) {
                               
                if(start-i > 1 && nums[start] === nums[start-1]) {
                    start = start+1;
                }
                
                else if(nums[start]+nums[end] === target) {
                    var temp = [nums[i],nums[end],nums[start]];
                    result.push(temp);
                    start= start+1;
                }
                
                else if(nums[start]+nums[end] > target) {
                    end = end-1;
                }
                else {
                    start= start+1;
                }
                
            }
            
        }
        
    }
    return result;
};
 
