/**
 * Solution to LeetCode problem 169. Majority Element
 * Runtime: 76 ms
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var maj = Math.floor(len/2)
    for (i = 0; i < len; i++){
        var check = nums[i];
        var count = 0;
        for (j = 0; j < len; j++){
            if(nums[j] == nums[i]){
                count ++;
                if(count > maj)
                    return check;
            }
        }
    }
    
};
