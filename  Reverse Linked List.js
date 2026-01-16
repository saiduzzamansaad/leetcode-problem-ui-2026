var reverseList = function(head) {
      let prev = null;
      let curr = head;
  
      while (curr) {
          let nextTemp = curr.next; // store next node
          curr.next = prev;         // reverse link
          prev = curr;              // move prev forward
          curr = nextTemp;          // move curr forward
      }
  
      return prev; // new head
  };