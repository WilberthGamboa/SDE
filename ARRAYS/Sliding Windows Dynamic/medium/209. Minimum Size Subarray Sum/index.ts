function minSubArrayLen(target: number, nums: number[]): number {

    let minSizeArray = Infinity;
    let currentSum = 0;
    let left= -1;
    for (let i = 0 ; i<nums.length ; i++){
        currentSum = currentSum + nums[i];

        while (currentSum>=target){
            const tmpSize = i-left;
            left++;
            currentSum = currentSum - nums[left];
            minSizeArray = Math.min(minSizeArray,tmpSize);

        }
    }

    if(minSizeArray===Infinity)
        minSizeArray = 0


    return minSizeArray;
    
};