var findKthLargest = function(nums, k) {
      const heap = [];
  
      const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];
  
      const push = (val) => {
          heap.push(val);
          let i = heap.length - 1;
          while (i > 0) {
              let p = Math.floor((i - 1) / 2);
              if (heap[p] <= heap[i]) break;
              swap(p, i);
              i = p;
          }
      };
  
      const pop = () => {
          const root = heap[0];
          heap[0] = heap.pop();
          let i = 0;
          while (true) {
              let l = 2 * i + 1, r = 2 * i + 2, s = i;
              if (l < heap.length && heap[l] < heap[s]) s = l;
              if (r < heap.length && heap[r] < heap[s]) s = r;
              if (s === i) break;
              swap(i, s);
              i = s;
          }
          return root;
      };
  
      for (let num of nums) {
          push(num);
          if (heap.length > k) pop();
      }
  
      return heap[0];
  };
  