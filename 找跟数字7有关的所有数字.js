function findSeven(N) {
  var i = 0;
  var result = [];
  for (i = 1; i <= N; i++) {
    if (matchSeven(i)) {
      result.push(i);
    }
  }
  return result;
}

function getLength(N) {
  var l = 0;
  while (N > 1) {
    N = N / 10;
    l++;
  }
  return l;
}

function matchSeven(i) {
  if (i % 7 == 0 || i % 10 == 7) return true;
  var len = getLength(i);
  for (var j = len - 1; j > 1; j--) {
    if (i - (i % Math.pow(10, j)) / Math.pow(10, j) == 7) return true;
    if (
      ((i % Math.pow(10, j)) - (i % Math.pow(10, j - 1))) /
        Math.pow(10, j - 1) ==
      7
    )
      return true;
  }
}

console.log(findSeven(1000));

// 适用于 N <= 1000
function findSeven(N) {
  var i = 0;
  var result = [];
  for (i = 1; i <= N; i++) {
    if (
      // 取模为 7 等于 0 或者取模为 10 等于 7
      i % 7 == 0 || i % 10 == 7
      // 假设是 (789 - 89) / 100 = 7，判断百位为7
      (i - (i % 100)) / 100 == 7 ||
      ((i % 100) - (i % 10)) / 10 == 7
    ) {
      result.push(i);
    }
  }
  return result;
}
