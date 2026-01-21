var largestComponentSize = function(nums) {
      const maxVal = 100000;
      const parent = new Array(maxVal + 1);
      const size = new Array(maxVal + 1).fill(1);
  
      for (let i = 0; i <= maxVal; i++) {
          parent[i] = i;
      }
  
      function find(x) {
          if (parent[x] !== x) {
              parent[x] = find(parent[x]);
          }
          return parent[x];
      }
  
      function union(x, y) {
          let px = find(x);
          let py = find(y);
          if (px !== py) {
              parent[py] = px;
              size[px] += size[py];
          }
      }
  
      // Map factor -> first number seen with that factor
      const factorMap = new Map();
  
      for (let num of nums) {
          let x = num;
  
          for (let f = 2; f * f <= x; f++) {
              if (x % f === 0) {
                  if (factorMap.has(f)) {
                      union(num, factorMap.get(f));
                  } else {
                      factorMap.set(f, num);
                  }
                  while (x % f === 0) x /= f;
              }
          }
  
          // Remaining prime factor
          if (x > 1) {
              if (factorMap.has(x)) {
                  union(num, factorMap.get(x));
              } else {
                  factorMap.set(x, num);
              }
          }
      }
  
      // Count component sizes
      const count = new Map();
      let ans = 0;
  
      for (let num of nums) {
          let root = find(num);
          count.set(root, (count.get(root) || 0) + 1);
          ans = Math.max(ans, count.get(root));
      }
  
      return ans;
  };
  