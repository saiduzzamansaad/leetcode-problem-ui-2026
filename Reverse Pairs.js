var reversePairs = function(nums) {
      function mergeSort(left, right) {
          if (left >= right) return 0;
  
          const mid = Math.floor((left + right) / 2);
          let count = mergeSort(left, mid) + mergeSort(mid + 1, right);
  
          // Count reverse pairs across halves
          let j = mid + 1;
          for (let i = left; i <= mid; i++) {
              while (j <= right && nums[i] > 2 * nums[j]) {
                  j++;
              }
              count += j - (mid + 1);
          }
  
          // Merge step
          const temp = [];
          let i = left;
          j = mid + 1;
          while (i <= mid && j <= right) {
              if (nums[i] <= nums[j]) {
                  temp.push(nums[i++]);
              } else {
                  temp.push(nums[j++]);
              }
          }
          while (i <= mid) temp.push(nums[i++]);
          while (j <= right) temp.push(nums[j++]);
  
          for (let k = 0; k < temp.length; k++) {
              nums[left + k] = temp[k];
          }
  
          return count;
      }
  
      return mergeSort(0, nums.length - 1);
  };
  