var findSmallestSetOfVertices = function(n, edges) {
      // Step 1: initialize indegree array
      const indegree = new Array(n).fill(0);
  
      // Step 2: calculate indegree of each node
      for (let [from, to] of edges) {
          indegree[to]++;
      }
  
      // Step 3: collect nodes with indegree 0
      const result = [];
      for (let i = 0; i < n; i++) {
          if (indegree[i] === 0) {
              result.push(i);
          }
      }
  
      return result;
  };
  