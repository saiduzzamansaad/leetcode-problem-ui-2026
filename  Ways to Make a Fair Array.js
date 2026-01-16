var waysToMakeFair = function(nums) {
      const n = nums.length;
      let totalEven = 0, totalOdd = 0;
      
      // Step 1: total sums
      for (let i = 0; i < n; i++) {
          if (i % 2 === 0) totalEven += nums[i];
          else totalOdd += nums[i];
      }
      
      let count = 0;
      let evenPrefix = 0, oddPrefix = 0;
      
      // Step 2: check each index
      for (let i = 0; i < n; i++) {
          if (i % 2 === 0) {
              // removing even index
              const newEven = evenPrefix + (totalOdd - oddPrefix);
              const newOdd  = oddPrefix + (totalEven - evenPrefix - nums[i]);
              if (newEven === newOdd) count++;
              evenPrefix += nums[i];
          } else {
              // removing odd index
              const newEven = evenPrefix + (totalOdd - oddPrefix - nums[i]);
              const newOdd  = oddPrefix + (totalEven - evenPrefix);
              if (newEven === newOdd) count++;
              oddPrefix += nums[i];
          }
      }
      
      return count;
  };