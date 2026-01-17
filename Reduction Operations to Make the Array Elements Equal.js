var reductionOperations = function(nums) {
      nums.sort((a, b) => a - b);
  
      let operations = 0;
      let n = nums.length;
  
      for (let i = 1; i < n; i++) {
          if (nums[i] !== nums[i - 1]) {
              operations += n - i;
          }
      }
  
      return operations;
  };
  