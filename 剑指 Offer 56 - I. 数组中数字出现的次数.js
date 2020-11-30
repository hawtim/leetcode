
// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

 

// 示例 1：

// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
// 示例 2：

// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]
 

// 限制：

// 2 <= nums.length <= 10000

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 相同的数异或为0，不同的异或为1。
// 0和任何数异或等于这个数本身。
// 所以，数组里面所有数异或 = 目标两个数异或 。 由于这两个数不同，所以异或结果必然不为0。
// 假设数组异或的二进制结果为10010，那么说明这两个数从右向左数第2位是不同的
// 那么可以根据数组里面所有数的第二位为0或者1将数组划分为2个。
// 这样做可以将目标数必然分散在不同的数组中，而且相同的数必然落在同一个数组中。
// 这两个数组里面的数各自进行异或，得到的结果就是答案

var singleNumbers = function(nums) {
  for (i of nums) {
    
  }
};

