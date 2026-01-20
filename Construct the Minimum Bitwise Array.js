var minBitwiseArray = function(nums) {
      const ans = [];
  
      for (let n of nums) {
          // If n is even, impossible
          if ((n & 1) === 0) {
              ans.push(-1);
              continue;
          }
  
          // Count trailing 1s
          let t = 0;
          let temp = n;
          while ((temp & 1) === 1) {
              t++;
              temp >>= 1;
          }
  
          // Remove the lowest trailing 1
          let x = n - (1 << (t - 1));
          ans.push(x);
      }
  
      return ans;
  };
  