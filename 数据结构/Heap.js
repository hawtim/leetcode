function createMaxHeap(arr, length) {
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
      if (j + 1 < length && array[j + 1] > array[j]) {
        j++;
      }
      if (array[i] >= [array[j]]) {
        break;
      } else {
        [array[i], array[j]] = [array[j], array[i]];
        i = j;
      }
    }
  }
  return arr;
}

function createMinHeap(arr, length) {
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
      if (j + 1 < length && array[j + 1] > array[j]) {
        j++;
      }
      if (array[i] >= [array[j]]) {
        break;
      } else {
        // 交换位置
        [array[i], array[j]] = [array[j], array[i]];
        i = j;
      }
    }
  }
  return arr;
}

// function buildMaxHeap(array, index, length) {
//   for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
//     if (i + 1 < length && array[i + 1] > array[i]) {
//       i++;
//     }
//     if (array[index] >= [array[i]]) {
//       break;
//     } else {
//       [array[index], array[i]] = [array[i], array[index]];
//       index = i;
//     }
//   }
// }



// function buildMinHeap(array, index, length) {
//   for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
//     if (i + 1 < length && array[i + 1] > array[i]) {
//       i++;
//     }
//     if (array[index] >= [array[i]]) {
//       break;
//     } else {
//       [array[index], array[i]] = [array[i], array[index]];
//       index = i;
//     }
//   }
// }

