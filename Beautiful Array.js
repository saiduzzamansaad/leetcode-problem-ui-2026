var beautifulArray = function(n) {
      if (n === 1) return [1];
  
      const left = beautifulArray(Math.floor((n + 1) / 2)); // odds
      const right = beautifulArray(Math.floor(n / 2));      // evens
  
      const result = [];
  
      for (let x of left) {
          result.push(2 * x - 1);
      }
      for (let x of right) {
          result.push(2 * x);
      }
  
      return result;
  };
  