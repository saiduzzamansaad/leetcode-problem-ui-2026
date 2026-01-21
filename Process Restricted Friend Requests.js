var friendRequests = function(n, restrictions, requests) {
      const parent = Array.from({ length: n }, (_, i) => i);
  
      function find(x) {
          if (parent[x] !== x) {
              parent[x] = find(parent[x]);
          }
          return parent[x];
      }
  
      function union(x, y) {
          const px = find(x);
          const py = find(y);
          if (px !== py) {
              parent[py] = px;
          }
      }
  
      const result = [];
  
      for (let [u, v] of requests) {
          const ru = find(u);
          const rv = find(v);
  
          // Already in same component
          if (ru === rv) {
              result.push(true);
              continue;
          }
  
          let canMerge = true;
  
          for (let [x, y] of restrictions) {
              const rx = find(x);
              const ry = find(y);
  
              // Check if merging violates restriction
              if (
                  (rx === ru && ry === rv) ||
                  (rx === rv && ry === ru)
              ) {
                  canMerge = false;
                  break;
              }
          }
  
          if (canMerge) {
              union(ru, rv);
              result.push(true);
          } else {
              result.push(false);
          }
      }
  
      return result;
  };
  