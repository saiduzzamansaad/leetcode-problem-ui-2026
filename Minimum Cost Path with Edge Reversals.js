var minCost = function (n, edges) {
      const graph = Array.from({ length: n }, () => []);
    
      // Build graph
      for (const [u, v, w] of edges) {
        graph[u].push([v, w]);       // normal edge
        graph[v].push([u, 2 * w]);   // reversed edge
      }
    
      const dist = Array(n).fill(Infinity);
      dist[0] = 0;
    
      // Min-heap implemented as array
      const heap = [];
      const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
          let p = (i - 1) >> 1;
          if (heap[p][0] <= heap[i][0]) break;
          [heap[p], heap[i]] = [heap[i], heap[p]];
          i = p;
        }
      };
    
      const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length) {
          heap[0] = last;
          let i = 0;
          while (true) {
            let l = i * 2 + 1;
            let r = i * 2 + 2;
            let smallest = i;
    
            if (l < heap.length && heap[l][0] < heap[smallest][0]) smallest = l;
            if (r < heap.length && heap[r][0] < heap[smallest][0]) smallest = r;
    
            if (smallest === i) break;
            [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
            i = smallest;
          }
        }
        return top;
      };
    
      push([0, 0]); // [cost, node]
    
      while (heap.length) {
        const [cost, u] = pop();
        if (cost > dist[u]) continue;
        if (u === n - 1) return cost;
    
        for (const [v, w] of graph[u]) {
          if (dist[v] > cost + w) {
            dist[v] = cost + w;
            push([dist[v], v]);
          }
        }
      }
    
      return -1;
    };
    