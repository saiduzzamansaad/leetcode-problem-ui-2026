var deleteDuplicates = function(head) {
      let current = head;
  
      while (current && current.next) {
          if (current.val === current.next.val) {
              // skip duplicate
              current.next = current.next.next;
          } else {
              // move to next node
              current = current.next;
          }
      }
  
      return head;
  };