class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxOnes= 0, currentOne = 0;
        for(int binary: nums){
            if(binary == 0){
                currentOne = 0;
            } else{
                currentOne++;
                if(currentOne > maxOnes){
                    maxOnes = currentOne;
                }
            }
        }
        return maxOnes;
    }
}