function bubbleSort(arr) {
  do {
    sort = false;
    for (var i = 0; i < arr.length-1; i+= 1) {
      if (arr[i] > arr[i+1]) {
        sort = true;
        arr[i] =  arr[i] ^ arr[i+1];
        arr[i+1] = arr[i] ^ arr[i+1];
        arr[i] =  arr[i] ^ arr[i+1];
      }
    }
  } while (sort);
  return arr;
}

module.exports = bubbleSort;