var validPath = function(n, edges, source, destination) {
      // Special case
      if (source === destination) return true;
  
      // Build adjacency list
      const adj = Array.from({ length: n }, () => []);
  
      for (let [u, v] of edges) {
          adj[u].push(v);
          adj[v].push(u);
      }
  
      // BFS
      const visited = new Array(n).fill(false);
      const queue = [source];
      visited[source] = true;
  
      while (queue.length > 0) {
          const node = queue.shift();
  
          for (let next of adj[node]) {
              if (!visited[next]) {
                  if (next === destination) return true;
                  visited[next] = true;
                  queue.push(next);
              }
          }
      }
  
      return false;
  };
  