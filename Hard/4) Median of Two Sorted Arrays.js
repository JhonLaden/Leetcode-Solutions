/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combined = [...nums1, ...nums2];
    let result = 0;
    for (let i = 0; i < combined.length; i++){
        for (let j = i+1; j <= combined.length-1 ; j++){
            if (combined[i] > combined[j]){
                let temp = combined[i];
                combined[i] = combined[j];
                combined[j] = temp;
            }
        }
    }
    console.log(combined);

    if (combined.length % 2 == 0 ){
        let firstHalf = (combined.length /2) -1
        let secondHalf = combined[firstHalf ] ;
        console.log(combined[secondHalf]);
        let total = combined[firstHalf] + combined[secondHalf];
        result = total/2;
    }else{
        result = Math.floor((combined.length/2) + 1);
    }
    return result;

};