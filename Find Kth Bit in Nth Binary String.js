var findKthBit = function(n, k) {
      // Base case
      if (n === 1) return "0";
  
      let mid = 1 << (n - 1); // 2^(n-1)
  
      if (k === mid) return "1";
  
      if (k < mid) {
          return findKthBit(n - 1, k);
      } else {
          // Mirror position
          let mirrored = 2 * mid - k;
          let bit = findKthBit(n - 1, mirrored);
          // Invert the bit
          return bit === "0" ? "1" : "0";
      }
  };
  