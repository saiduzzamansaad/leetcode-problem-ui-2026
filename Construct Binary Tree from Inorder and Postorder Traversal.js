function TreeNode(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
  
  var buildTree = function(inorder, postorder) {
      const inorderMap = new Map();
      inorder.forEach((val, idx) => inorderMap.set(val, idx));
  
      let postIndex = postorder.length - 1;
  
      function helper(left, right) {
          if (left > right) return null;
  
          // Take the current root from postorder
          const rootVal = postorder[postIndex--];
          const root = new TreeNode(rootVal);
  
          // Split inorder into left and right
          const index = inorderMap.get(rootVal);
  
          // Important: build **right subtree first**
          root.right = helper(index + 1, right);
          root.left = helper(left, index - 1);
  
          return root;
      }
  
      return helper(0, inorder.length - 1);
  };
  