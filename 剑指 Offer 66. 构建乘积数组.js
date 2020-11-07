// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

//  

// 示例:

// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]
//  

// 提示：

// 所有元素乘积之和不会溢出 32 位整数
// a.length <= 100000

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(arr) {
  const result = [];
  const len = arr.length
  if (len > 0) {
    // 计算下三角, 意思是b[i]的值是数组a中除了下标i以外的元素的积
    result[0] = 1;
    for (let i = 1; i < len; i++) {
      result[i] = result[i - 1] * arr[i - 1];
    }
    // 乘上三角
    let temp = 1;
    for (let i = len - 2; i >= 0; i--) {
      temp = temp * arr[i + 1];
      result[i] = result[i] * temp;
    }
  }
  return result;
};