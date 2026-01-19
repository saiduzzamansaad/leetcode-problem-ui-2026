var shortestPalindrome = function (s) {
      const n = s.length;
      if (n === 0) return s;
  
      const rev = s.split('').reverse().join('');
      const temp = s + '#' + rev;
  
      // Build LPS array (KMP preprocessing)
      const lps = Array(temp.length).fill(0);
  
      let len = 0;
      for (let i = 1; i < temp.length; i++) {
          while (len > 0 && temp[i] !== temp[len]) {
              len = lps[len - 1];
          }
          if (temp[i] === temp[len]) {
              len++;
          }
          lps[i] = len;
      }
  
      // Longest palindromic prefix length
      const longestPrefix = lps[temp.length - 1];
  
      // Add remaining reversed part in front
      const add = rev.substring(0, n - longestPrefix);
      return add + s;
  };
  