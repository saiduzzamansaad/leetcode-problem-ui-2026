var combine = function(n, k) {
      const result = [];
      const path = [];
  
      function backtrack(start) {
          // If we have k numbers, add a copy
          if (path.length === k) {
              result.push([...path]);
              return;
          }
  
          // Try numbers from 'start' to 'n'
          for (let i = start; i <= n; i++) {
              path.push(i);
              backtrack(i + 1);
              path.pop(); // backtrack
          }
      }
  
      backtrack(1);
      return result;
  };
  