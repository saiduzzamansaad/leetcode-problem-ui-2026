var merge = function(intervals) {
      if (intervals.length === 0) return [];
  
      // Step 1: Sort by start time
      intervals.sort((a, b) => a[0] - b[0]);
  
      const result = [intervals[0]];
  
      for (let i = 1; i < intervals.length; i++) {
          const [start, end] = intervals[i];
          const last = result[result.length - 1];
  
          // Step 2: Check overlap
          if (start <= last[1]) {
              // Merge intervals
              last[1] = Math.max(last[1], end);
          } else {
              // No overlap
              result.push([start, end]);
          }
      }
  
      return result;
  };
  