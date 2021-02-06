/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxOnes = 0, currentOnes = 0;
    nums.forEach(binary => {
        if(binary === 0){
            currentOnes = 0;
        }else {
            currentOnes++;
            if(currentOnes > maxOnes){
                maxOnes = currentOnes;
            }
        }
    })
    return maxOnes;
};