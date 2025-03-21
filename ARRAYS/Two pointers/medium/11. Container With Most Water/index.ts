function maxArea(height: number[]): number {
    let leftPointer = 0
    let rigthPointer = height.length-1
    let maxArea = 0;
    while(leftPointer<rigthPointer){
        const minHeight = Math.min(height[leftPointer],height[rigthPointer])
   
        const currentArea =  (rigthPointer-leftPointer)*minHeight
        maxArea = Math.max(maxArea,currentArea)
       

        if(height[leftPointer]<height[rigthPointer]){
            
            leftPointer++
        }else{
            rigthPointer--
        }

    }

    return maxArea


};