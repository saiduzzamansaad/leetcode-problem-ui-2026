var search = function(nums, target) {
      let left = 0;
      let right = nums.length - 1;
  
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
  
          if (nums[mid] === target) {
              return mid; // found
          } else if (nums[mid] < target) {
              left = mid + 1; // search right
          } else {
              right = mid - 1; // search left
          }
      }
  
      return -1; // not found
  };
  