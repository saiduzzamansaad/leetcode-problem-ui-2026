var hasCycle = function(head) {
      if (!head || !head.next) return false;
  
      let slow = head;
      let fast = head;
  
      while (fast && fast.next) {
          slow = slow.next;        // move 1 step
          fast = fast.next.next;   // move 2 steps
  
          if (slow === fast) {
              return true; // cycle detected
          }
      }
  
      return false; // no cycle
  };
  