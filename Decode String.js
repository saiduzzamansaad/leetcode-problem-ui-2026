var decodeString = function(s) {
      let stack = [];
      let currStr = "";
      let num = 0;
  
      for (let ch of s) {
          if (ch >= '0' && ch <= '9') {
              num = num * 10 + (ch - '0');
          } 
          else if (ch === '[') {
              stack.push([currStr, num]);
              currStr = "";
              num = 0;
          } 
          else if (ch === ']') {
              let [prevStr, repeat] = stack.pop();
              currStr = prevStr + currStr.repeat(repeat);
          } 
          else {
              currStr += ch;
          }
      }
  
      return currStr;
  };
  