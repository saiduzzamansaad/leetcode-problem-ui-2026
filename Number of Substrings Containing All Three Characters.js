var numberOfSubstrings = function(s) {
      let lastA = -1, lastB = -1, lastC = -1;
      let result = 0;
  
      for (let i = 0; i < s.length; i++) {
          if (s[i] === 'a') lastA = i;
          else if (s[i] === 'b') lastB = i;
          else lastC = i;
  
          const minLast = Math.min(lastA, lastB, lastC);
          if (minLast !== -1) {
              result += minLast + 1;
          }
      }
  
      return result;
  };
  