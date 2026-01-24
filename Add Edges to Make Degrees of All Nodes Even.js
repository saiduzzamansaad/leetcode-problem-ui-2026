var isPossible = function(n, edges) {
      const deg = new Array(n + 1).fill(0);
      const graph = new Set();
  
      // build degree & edge set
      for (let [u, v] of edges) {
          deg[u]++;
          deg[v]++;
          graph.add(`${u},${v}`);
          graph.add(`${v},${u}`);
      }
  
      // collect odd degree nodes
      const odd = [];
      for (let i = 1; i <= n; i++) {
          if (deg[i] % 2 === 1) odd.push(i);
      }
  
      // case 0
      if (odd.length === 0) return true;
  
      // helper: check edge existence
      const hasEdge = (a, b) => graph.has(`${a},${b}`);
  
      // case 2
      if (odd.length === 2) {
          const [u, v] = odd;
          if (!hasEdge(u, v)) return true;
  
          // try intermediate node
          for (let i = 1; i <= n; i++) {
              if (i !== u && i !== v &&
                  !hasEdge(u, i) &&
                  !hasEdge(v, i)) {
                  return true;
              }
          }
          return false;
      }
  
      // case 4
      if (odd.length === 4) {
          const [a, b, c, d] = odd;
          return (
              (!hasEdge(a, b) && !hasEdge(c, d)) ||
              (!hasEdge(a, c) && !hasEdge(b, d)) ||
              (!hasEdge(a, d) && !hasEdge(b, c))
          );
      }
  
      return false;
  };
  