var minScore = function(n, roads) {
      // adjacency list
      const adj = Array.from({ length: n + 1 }, () => []);
  
      for (let [a, b, d] of roads) {
          adj[a].push([b, d]);
          adj[b].push([a, d]);
      }
  
      const visited = new Array(n + 1).fill(false);
      let answer = Infinity;
  
      // BFS from city 1
      const queue = [1];
      visited[1] = true;
  
      while (queue.length > 0) {
          const city = queue.shift();
  
          for (let [next, dist] of adj[city]) {
              // update minimum distance
              answer = Math.min(answer, dist);
  
              if (!visited[next]) {
                  visited[next] = true;
                  queue.push(next);
              }
          }
      }
  
      return answer;
  };
  