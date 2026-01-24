var countCompleteComponents = function(n, edges) {
      // adjacency list
      const adj = Array.from({ length: n }, () => []);
  
      for (let [u, v] of edges) {
          adj[u].push(v);
          adj[v].push(u);
      }
  
      const visited = new Array(n).fill(false);
      let completeCount = 0;
  
      function dfs(node, info) {
          visited[node] = true;
          info.nodes++;
          info.edges += adj[node].length;
  
          for (let next of adj[node]) {
              if (!visited[next]) {
                  dfs(next, info);
              }
          }
      }
  
      for (let i = 0; i < n; i++) {
          if (!visited[i]) {
              const info = { nodes: 0, edges: 0 };
              dfs(i, info);
  
              // since each edge counted twice
              const actualEdges = info.edges / 2;
              const expectedEdges = info.nodes * (info.nodes - 1) / 2;
  
              if (actualEdges === expectedEdges) {
                  completeCount++;
              }
          }
      }
  
      return completeCount;
  };
  