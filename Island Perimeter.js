var islandPerimeter = function(grid) {
      let rows = grid.length;
      let cols = grid[0].length;
      let land = 0;
      let shared = 0;
  
      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              if (grid[i][j] === 1) {
                  land++;
  
                  // check right neighbor
                  if (j + 1 < cols && grid[i][j + 1] === 1) {
                      shared++;
                  }
  
                  // check down neighbor
                  if (i + 1 < rows && grid[i + 1][j] === 1) {
                      shared++;
                  }
              }
          }
      }
  
      return land * 4 - shared * 2;
  };
  