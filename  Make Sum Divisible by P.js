var minSubarray = function(nums, p) {
      const total = nums.reduce((a, b) => a + b, 0);
      const target = total % p;
      if (target === 0) return 0;
  
      const map = new Map();
      map.set(0, -1);
      let prefix = 0;
      let minLen = nums.length;
  
      for (let i = 0; i < nums.length; i++) {
          prefix = (prefix + nums[i]) % p;
          const needed = (prefix - target + p) % p;
  
          if (map.has(needed)) {
              minLen = Math.min(minLen, i - map.get(needed));
          }
  
          map.set(prefix, i);
      }
  
      return minLen === nums.length ? -1 : minLen;
  };