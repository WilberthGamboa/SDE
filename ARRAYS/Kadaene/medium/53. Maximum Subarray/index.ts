function maxSubArray(nums: number[]): number {
    let max_sum = -Infinity;
        let current_sum = 0;
    
        for (let num of nums) {
            current_sum = Math.max(num, current_sum + num);
            max_sum = Math.max(max_sum, current_sum);
        }
    
        return max_sum;
    };
// FOR ME THE BEST WAY
    function maxSubArray3(nums: number[]): number {
        let max_sum = nums[0];
        let current_sum = nums[0];
    
        for (let i = 1 ; i<nums.length ; i++){
            // BASICAMENTE EVITA QUE TENGAMOS DEUDA SI LA SUMA ACTUAL CON NUESTRO NUMERO ES MENOR ENTONCES RETABLECE LA SUMATORIA
           current_sum = Math.max(nums[i], current_sum + nums[i]);
           max_sum = Math.max(max_sum, current_sum);
        }
    
        return max_sum;
 

};



    function maxSubArray2(nums: number[]): number {
        let maxSum = nums[0]    
        let currentSum = 0
        for (let i = 0 ; i<nums.length;i++){
            if (currentSum<0)
                currentSum = 0
            currentSum = currentSum + nums[i]
            maxSum = Math.max(currentSum,maxSum)
        }
    
        return maxSum
    
        
    };