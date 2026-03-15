//  Solve for problem kth-missing-positive-number on LeetCode => https://leetcode.com/problems/kth-missing-positive-number/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const temp = []
    for(let i = 1;temp.length < k ; i++){
        if(arr.includes(i)){
        continue;
    }else {
        temp.push(i)
    }
    
    }
        return(temp.at(-1));
};