/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (36.51%)
 * Likes:    1059
 * Dislikes: 0
 * Total Accepted:    189.2K
 * Total Submissions: 479K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 给你一个升序排列的整数数组 nums ，和一个整数 target 。
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。
 *
 * 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1], target = 0
 * 输出：-1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 * nums 中的每个值都 独一无二
 * nums 肯定会在某个点上旋转
 * -10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 时间复杂度：O(logn)，二分的思想
// 空间复杂度：O(1) 仅使用常数级别的变量
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    // 当中点值为 target 的时候返回
    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[start]) {
      // nums[mid] >= nums[start] 那么 nums[mid] 的值在左侧有序部分
      //（不是切成两半后的左右，而是以拐点为界的左右，这句话让我理解了好久，
      // 即 nums[start] 到 nums[mid] 都是有序的）
      if (target >= nums[start] && target <= nums[mid]) {
        // target 在 [start, mid] 之间
        end = mid - 1;
      } else {
        //target 不在 [start, mid] 之间
        start = mid + 1;
      }
    } else {
      // nums[mid] < nums[start], 那么 nums[mid] 对应的值在右侧有序部分，详细同上
      if (target >= nums[mid] && target <= nums[end]) {
        // target 在 [mid, end] 之间
        start = mid + 1;
      } else {
        // target 不在 [mid, end] 之间
        end = mid - 1;
      }
    }
  }
  return -1;
};

// @lc code=end

