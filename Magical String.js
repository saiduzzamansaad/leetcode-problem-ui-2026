var magicalString = function(n) {
      if (n === 0) return 0;
      if (n <= 3) return 1;
  
      const s = [1, 2, 2];
      let i = 2;          // pointer for reading group size
      let num = 1;        // next number to append (1 or 2)
      let countOnes = 1;  // initial count of '1's
  
      while (s.length < n) {
          const times = s[i];
  
          for (let k = 0; k < times && s.length < n; k++) {
              s.push(num);
              if (num === 1) countOnes++;
          }
  
          num = num === 1 ? 2 : 1; // switch number
          i++;
      }
  
      return countOnes;
  };
  