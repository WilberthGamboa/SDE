function findMaxAverage(nums: number[], k: number): number {

    let currentSum = 0;

    for (let i = 0; i<k ; i++){
        currentSum = currentSum + nums[i];
    }

    let bestAverageSum = currentSum/k

     for (let i = k; i<nums.length ; i++){
        currentSum = currentSum + nums[i] - nums[i-k];
        let averageCurrentSum = currentSum/k
        bestAverageSum = Math.max(bestAverageSum,averageCurrentSum)
    }
    return bestAverageSum;
    
};