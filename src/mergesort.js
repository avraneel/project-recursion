function merge(left, right) {
  const merged = [];
  let leftPointer = 0,
    rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    // Loop till both pointers point within array
    if (left[leftPointer] < right[rightPointer]) {
      // add smaller element to merged array and update corresponding pointer
      merged.push(left[leftPointer]);
      leftPointer++;
    } else {
      // add smaller element to merged array and update corresponding pointer
      merged.push(right[rightPointer]);
      rightPointer++;
    }
  }
  if (leftPointer >= left.length) {
    // left array exhausted, copy everything remaining from right subarray
    return merged.concat(right.slice(rightPointer));
  } else {
    // right array exhausted, copy everything remaining from left subarray
    return merged.concat(left.slice(leftPointer));
  }
}

export function mergesort(arr) {
  if (arr.length <= 1) return arr;
  else {
    const left = mergesort(arr.slice(0, arr.length / 2));
    const right = mergesort(arr.slice(arr.length / 2));
    return merge(left, right);
  }
}
