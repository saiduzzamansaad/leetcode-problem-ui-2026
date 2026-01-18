var largestMagicSquare = function (grid) {
      const m = grid.length;
      const n = grid[0].length;
  
      // Prefix sums
      const row = Array.from({ length: m }, () => Array(n + 1).fill(0));
      const col = Array.from({ length: m + 1 }, () => Array(n).fill(0));
      const diag = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
      const anti = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
      // Build prefix sums
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              row[i][j + 1] = row[i][j] + grid[i][j];
              col[i + 1][j] = col[i][j] + grid[i][j];
              diag[i + 1][j + 1] = diag[i][j] + grid[i][j];
              anti[i + 1][j] = anti[i][j + 1] + grid[i][j];
          }
      }
  
      // Check squares from largest to smallest
      for (let size = Math.min(m, n); size >= 2; size--) {
          for (let r = 0; r + size <= m; r++) {
              for (let c = 0; c + size <= n; c++) {
  
                  // Main diagonal
                  const target =
                      diag[r + size][c + size] - diag[r][c];
  
                  // Anti-diagonal
                  if (
                      anti[r + size][c] - anti[r][c + size] !== target
                  ) continue;
  
                  let valid = true;
  
                  // Check rows
                  for (let i = r; i < r + size; i++) {
                      if (row[i][c + size] - row[i][c] !== target) {
                          valid = false;
                          break;
                      }
                  }
  
                  // Check columns
                  for (let j = c; j < c + size && valid; j++) {
                      if (col[r + size][j] - col[r][j] !== target) {
                          valid = false;
                          break;
                      }
                  }
  
                  if (valid) return size;
              }
          }
      }
  
      return 1; // Every 1x1 is magic
  };
  