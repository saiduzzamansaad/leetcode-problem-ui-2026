var maximalPathQuality = function(values, edges, maxTime) {
      const n = values.length;
  
      // adjacency list
      const adj = Array.from({ length: n }, () => []);
  
      for (let [u, v, t] of edges) {
          adj[u].push([v, t]);
          adj[v].push([u, t]);
      }
  
      let ans = 0;
      const visited = new Array(n).fill(0);
  
      function dfs(node, time, score) {
          // time exceeded
          if (time > maxTime) return;
  
          // first visit → add value
          if (visited[node] === 0) {
              score += values[node];
          }
  
          visited[node]++;
  
          // if back to 0, update answer
          if (node === 0) {
              ans = Math.max(ans, score);
          }
  
          // explore neighbors
          for (let [next, cost] of adj[node]) {
              dfs(next, time + cost, score);
          }
  
          // backtrack
          visited[node]--;
      }
  
      dfs(0, 0, 0);
      return ans;
  };
  