var restoreIpAddresses = function(s) {
      const result = [];
      const path = [];
  
      function backtrack(start) {
          // If we have 4 segments
          if (path.length === 4) {
              // Use all characters
              if (start === s.length) {
                  result.push(path.join('.'));
              }
              return;
          }
  
          // Pruning: too many or too few chars left
          let remainingSegments = 4 - path.length;
          let remainingChars = s.length - start;
          if (remainingChars < remainingSegments || remainingChars > remainingSegments * 3) {
              return;
          }
  
          // Try segments of length 1 to 3
          for (let len = 1; len <= 3 && start + len <= s.length; len++) {
              let segment = s.substring(start, start + len);
  
              // Leading zero check
              if (segment.length > 1 && segment[0] === '0') break;
  
              let value = Number(segment);
              if (value > 255) break;
  
              path.push(segment);
              backtrack(start + len);
              path.pop();
          }
      }
  
      backtrack(0);
      return result;
  };
  