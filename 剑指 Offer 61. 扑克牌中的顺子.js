// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。

//  

// 示例 1:

// 输入: [1,2,3,4,5]
// 输出: True
//  

// 示例 2:

// 输入: [0,0,1,2,5]
// 输出: True
//  

// 限制：

// 数组长度为 5 

// 数组的数取值为 [0, 13] .

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  if (nums && nums.length > 0) {
    // 注意这个地方的排序，10 会排到 1 前面
    nums.sort((a, b) => a - b);
    let kingRecord = 0;
    let spaceRecord = 0;
    let len = nums.length
    for (let i = 0; i < len - 1; i++) {
      if (nums[i] === 0) {
        // 记录大小王的数量
        kingRecord++;
      } else {
        // 记录两数之间的最大间隔
        const space = nums[i + 1] - nums[i];
        // 如果两数相同或间隔大于等于 3，最多两张王
        if (space - 1 > 2) return false
        if (space == 0) return false
        spaceRecord += space - 1;
        // 记录最大间隔，一旦大于2就可以不用检查了
        if (spaceRecord > 2) return false
      }
    }
    return kingRecord - spaceRecord >= 0;
  }
  return false;
};