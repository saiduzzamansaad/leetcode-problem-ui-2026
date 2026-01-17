var sortArray = function(nums) {
      const n = nums.length;
  
      // Build max heap
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          heapify(nums, n, i);
      }
  
      // Extract elements from heap
      for (let i = n - 1; i > 0; i--) {
          // Swap max element with last
          [nums[0], nums[i]] = [nums[i], nums[0]];
          // Heapify reduced heap
          heapify(nums, i, 0);
      }
  
      return nums;
  };
  
  function heapify(arr, size, i) {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
  
      if (left < size && arr[left] > arr[largest]) {
          largest = left;
      }
  
      if (right < size && arr[right] > arr[largest]) {
          largest = right;
      }
  
      if (largest !== i) {
          [arr[i], arr[largest]] = [arr[largest], arr[i]];
          heapify(arr, size, largest);
      }
  }
  