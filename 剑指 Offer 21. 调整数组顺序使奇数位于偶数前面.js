// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

//  

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
//  

// 提示：

// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 双指针的思路
// 若需要保证相对顺序不变，则不能用上面的写法，需要让两个指针同时从左侧开始
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var start = 0
  var end = nums.length - 1
  while(start < end) {
    // 奇数不动
    while(nums[start] % 2 === 1) {
      start++
    }
    // 偶数不动
    while(nums[end] % 2 === 0) {
      end--
    }
    // 尾指针还大于头指针的时候交换位置
    if (start < end) {
      swap(nums, start, end)
    }
  }
  return nums
};

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
  return array
}