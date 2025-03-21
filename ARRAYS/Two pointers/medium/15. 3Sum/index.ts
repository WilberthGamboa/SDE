function threeSum(nums: number[]): number[][] {

    const triplets: number[][] = [];
    // primero debemos ordenar los numeros 
    nums.sort((a,b) => {
        return a-b
    })

    for (let i = 0; i<nums.length; i++){
        if(i > 0 && nums[i]===nums[i-1]){
            continue
        }

        let leftPointer = i+1;
        let rigthPointer = nums.length - 1;

        while(leftPointer<rigthPointer){
            const currentDiff = nums[leftPointer] + nums[rigthPointer] + nums[i];
            if(currentDiff<0){
                leftPointer++
            } else if (currentDiff>0) {
                rigthPointer--
            }else{
                triplets.push([nums[i],nums[leftPointer],nums[rigthPointer]])
                leftPointer++
                while(nums[leftPointer]===nums[leftPointer-1] && leftPointer<rigthPointer){
                    leftPointer++
                }
            }

        }


    }


    return triplets;
};