// 时间复杂度 O(n^2)
function bubbleSort() {
  var numElements = this.dataStore.length
  var temp
  for (let outer = numElements; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1)
      }
    }
  }
}

// 两重循环不断交换两者间的位置