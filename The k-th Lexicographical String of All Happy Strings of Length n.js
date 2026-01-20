var getHappyString = function(n, k) {
      const chars = ['a', 'b', 'c'];
      let count = 0;
      let answer = "";
  
      function dfs(path) {
          if (path.length === n) {
              count++;
              if (count === k) {
                  answer = path;
              }
              return;
          }
  
          for (let ch of chars) {
              if (path.length === 0 || path[path.length - 1] !== ch) {
                  if (answer !== "") return; // early stop
                  dfs(path + ch);
              }
          }
      }
  
      dfs("");
      return answer;
  };
  