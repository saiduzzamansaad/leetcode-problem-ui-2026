var maxSideLength = function (mat, threshold) {
      const m = mat.length;
      const n = mat[0].length;
  
      // Step 1: Build prefix sum matrix
      const prefix = Array.from({ length: m + 1 }, () =>
          Array(n + 1).fill(0)
      );
  
      for (let i = 1; i <= m; i++) {
          for (let j = 1; j <= n; j++) {
              prefix[i][j] =
                  mat[i - 1][j - 1] +
                  prefix[i - 1][j] +
                  prefix[i][j - 1] -
                  prefix[i - 1][j - 1];
          }
      }
  
      // Helper to check if a square of side `len` exists
      function canFit(len) {
          for (let i = len; i <= m; i++) {
              for (let j = len; j <= n; j++) {
                  const sum =
                      prefix[i][j] -
                      prefix[i - len][j] -
                      prefix[i][j - len] +
                      prefix[i - len][j - len];
  
                  if (sum <= threshold) return true;
              }
          }
          return false;
      }
  
      // Step 2: Binary Search on side length
      let left = 0;
      let right = Math.min(m, n);
  
      while (left < right) {
          const mid = Math.floor((left + right + 1) / 2);
          if (canFit(mid)) {
              left = mid;
          } else {
              right = mid - 1;
          }
      }
  
      return left;
  };
  