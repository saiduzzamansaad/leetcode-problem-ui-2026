var insertionSortList = function(head) {
      if (!head || !head.next) return head;
  
      const dummy = new ListNode(0);
      let current = head;
  
      while (current) {
          let prev = dummy;
          let next = current.next;
  
          // Find insertion position
          while (prev.next && prev.next.val < current.val) {
              prev = prev.next;
          }
  
          // Insert current node
          current.next = prev.next;
          prev.next = current;
  
          current = next;
      }
  
      return dummy.next;
  };
  