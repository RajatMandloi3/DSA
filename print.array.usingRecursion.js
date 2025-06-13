const printArr = (arr, length, index) => {
  if (index < length) {
    console.log(arr[index])
    printArr(arr, length, index + 1)
  }
}

printArr([10, 20, 30, 40, 50], 5, 0)
