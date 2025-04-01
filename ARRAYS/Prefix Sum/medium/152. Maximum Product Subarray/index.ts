function maxProduct(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let maxProduct = nums[0];
    let prefixProduct = 1;
    let suffixProduct = 1;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Reiniciar productos si son cero
        prefixProduct = (prefixProduct === 0 ? 1 : prefixProduct) * nums[i];
        suffixProduct = (suffixProduct === 0 ? 1 : suffixProduct) * nums[n - 1 - i];
        
        // Actualizar el máximo (¡aquí usamos Math.max!)
        maxProduct = Math.max(maxProduct, prefixProduct, suffixProduct);
    }

    return maxProduct;
}