var longestPrefix = function (s) {
      const n = s.length;
      const lps = Array(n).fill(0);
  
      let len = 0;
      for (let i = 1; i < n; i++) {
          while (len > 0 && s[i] !== s[len]) {
              len = lps[len - 1];
          }
          if (s[i] === s[len]) {
              len++;
          }
          lps[i] = len;
      }
  
      return s.substring(0, lps[n - 1]);
  };
  