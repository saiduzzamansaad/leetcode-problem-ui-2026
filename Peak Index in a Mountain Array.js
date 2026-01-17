var peakIndexInMountainArray = function(arr) {
      let left = 0;
      let right = arr.length - 1;
  
      while (left < right) {
          const mid = Math.floor((left + right) / 2);
  
          if (arr[mid] < arr[mid + 1]) {
              // Ascending slope → move right
              left = mid + 1;
          } else {
              // Descending slope → move left
              right = mid;
          }
      }
  
      // left === right → peak index
      return left;
  };
  