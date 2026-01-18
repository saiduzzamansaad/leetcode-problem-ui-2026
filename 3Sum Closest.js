var threeSumClosest = function(nums, target) {
      nums.sort((a, b) => a - b);
  
      let closestSum = nums[0] + nums[1] + nums[2];
  
      for (let i = 0; i < nums.length - 2; i++) {
          let left = i + 1;
          let right = nums.length - 1;
  
          while (left < right) {
              const sum = nums[i] + nums[left] + nums[right];
  
              // Update closest sum if needed
              if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                  closestSum = sum;
              }
  
              if (sum === target) {
                  return sum; // Exact match
              } else if (sum < target) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  
      return closestSum;
  };
  