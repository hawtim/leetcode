/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 *
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1/description/
 *
 * algorithms
 * Medium (47.80%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 38.7K
 * Testcase Example:  '["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]\n' +
  '[[],[1],[2],[2],[],[1],[2],[]]'
 *
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
 *
 *
 * insert(val)：当元素 val 不存在时，向集合中插入该项。
 * remove(val)：元素 val 存在时，从集合中移除该项。
 * getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
 *
 *
 * 示例 :
 *
 *
 * // 初始化一个空的集合。
 * RandomizedSet randomSet = new RandomizedSet();
 *
 * // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
 * randomSet.insert(1);
 *
 * // 返回 false ，表示集合中不存在 2 。
 * randomSet.remove(2);
 *
 * // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
 * randomSet.insert(2);
 *
 * // getRandom 应随机返回 1 或 2 。
 * randomSet.getRandom();
 *
 * // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
 * randomSet.remove(1);
 *
 * // 2 已在集合中，所以返回 false 。
 * randomSet.insert(2);
 *
 * // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
 * randomSet.getRandom();
 *
 *
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  // 存索引，有 O(1) 的插入和删除，但是只有 O(n) 的随机读取
  this.hash = {}
  // 存具体值，有 O(1) 的读取
  this.array = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.hash[val] >= 0) return false
  this.array.push(val)
  this.hash[val] = this.array.length - 1
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
// 将最后一个元素换到待删除元素的位置，更新最后一个元素的索引
RandomizedSet.prototype.remove = function(val) {
  const idx = this.hash[val]
  if (idx == undefined) return false
  // 删除当前元素的索引
  delete this.hash[val]
  const lastIdx = this.array.length - 1
  if (idx !== lastIdx) {
    const last = this.array[lastIdx]
    // 与最后一个元素换位置
    this.array[idx] = last
    // 更新最后一个元素的索引
    this.hash[last] = idx
  }
  // 最后删除数组的最后一个元素
  this.array.splice(lastIdx, 1)
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const random = Math.floor(Math.random() * (this.array.length))
  return this.array[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

