var characterReplacement = function(s, k) {
      const freq = new Array(26).fill(0);
      let left = 0;
      let maxCount = 0;
      let result = 0;
  
      for (let right = 0; right < s.length; right++) {
          const idx = s.charCodeAt(right) - 65;
          freq[idx]++;
          maxCount = Math.max(maxCount, freq[idx]);
  
          // If more than k replacements needed, shrink window
          while ((right - left + 1) - maxCount > k) {
              freq[s.charCodeAt(left) - 65]--;
              left++;
          }
  
          result = Math.max(result, right - left + 1);
      }
  
      return result;
  };
  