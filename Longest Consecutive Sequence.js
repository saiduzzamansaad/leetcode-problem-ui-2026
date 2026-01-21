var longestConsecutive = function(nums) {
      const set = new Set(nums);
      let longest = 0;
  
      for (let num of set) {
          // Only start counting if num is the beginning
          if (!set.has(num - 1)) {
              let currentNum = num;
              let count = 1;
  
              while (set.has(currentNum + 1)) {
                  currentNum++;
                  count++;
              }
  
              longest = Math.max(longest, count);
          }
      }
  
      return longest;
  };
  