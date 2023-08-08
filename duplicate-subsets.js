/**
Leet code explanation: Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
**/
function subsetsWithDup(nums) {
    const result = [];
    
    nums.sort((a, b) => a - b);
    
    function backtrack(startIndex, currentSubset) {
        result.push([...currentSubset]);
        
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
