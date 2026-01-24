var minPairSum = function(nums) {
      // Step 1: Sort the array
      nums.sort((a, b) => a - b);
  
      let left = 0;
      let right = nums.length - 1;
      let maxSum = 0;
  
      // Step 2: Pair smallest with largest
      while (left < right) {
          const pairSum = nums[left] + nums[right];
          maxSum = Math.max(maxSum, pairSum);
          left++;
          right--;
      }
  
      return maxSum;
  };
  