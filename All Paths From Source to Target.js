var allPathsSourceTarget = function(graph) {
      const target = graph.length - 1;
      const result = [];
  
      function dfs(node, path) {
          // add current node to path
          path.push(node);
  
          // if reached target, save path
          if (node === target) {
              result.push([...path]);
          } else {
              // explore neighbors
              for (let next of graph[node]) {
                  dfs(next, path);
              }
          }
  
          // backtrack
          path.pop();
      }
  
      dfs(0, []);
      return result;
  };
  