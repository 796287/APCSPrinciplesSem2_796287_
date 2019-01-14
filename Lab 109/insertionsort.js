function insertionSort (items) {
  for (var i = 0; i < num.length; i++) {
    let value = items[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j]
    }
  }
  return list
}
