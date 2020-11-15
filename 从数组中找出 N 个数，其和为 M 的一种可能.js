function getAllCombination(nums, n, sum, stack) {
  // 满足 N 个数
  if (stack.length === n) {
    // 并且相加等于 sum
    if (stack.reduce((t, c) => t + c) === sum) {
      return stack;
    }
    return
  }
  // 深度优先遍历加递归
  for (let i = 0; i < nums.length; i++) {
    const cur = nums.shift();
    stack.push(cur);
    const result = getAllCombination(nums.slice(i), n, sum, stack);
    if (result) return result;
    // 回溯：没有满足条件，stack 中移除该字符
    stack.pop();
    // 把当前元素放回去
    nums.push(cur);
  }
}

// 获取所有可能性
function getAll(nums, n, sum) {
  var all = []
  // 相当于暴力了。
  for (let i = 0; i < nums.length; i++) {
    var result = getAllCombination(nums, n, sum, [])
    if (!result) continue
    all.push(result)
  }
  return all
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10, 11, 12, 13, 14, 15, 15, 6, 80, 27, 29, 70, 223, 210, 88];

console.log(getAll(arr, 3, 30));

