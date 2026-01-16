var firstMissingPositive = function(nums) {
      const n = nums.length;
      
      for (let i = 0; i < n; i++) {
          while (
              nums[i] > 0 && 
              nums[i] <= n && 
              nums[nums[i] - 1] !== nums[i]
          ) {
              // Swap nums[i] to its correct position
              const temp = nums[nums[i] - 1];
              nums[nums[i] - 1] = nums[i];
              nums[i] = temp;
          }
      }
      
      // Find the first missing positive
      for (let i = 0; i < n; i++) {
          if (nums[i] !== i + 1) {
              return i + 1;
          }
      }
      
      return n + 1;
  };