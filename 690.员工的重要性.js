/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 *
 * https://leetcode-cn.com/problems/employee-importance/description/
 *
 * algorithms
 * Easy (57.47%)
 * Likes:    116
 * Dislikes: 0
 * Total Accepted:    19.1K
 * Total Submissions: 32.2K
 * Testcase Example:  '[[1,2,[2]], [2,3,[]]]\n2'
 *
 * 给定一个保存员工信息的数据结构，它包含了员工唯一的id，重要度 和 直系下属的id。
 * 
 * 比如，员工1是员工2的领导，员工2是员工3的领导。他们相应的重要度为15, 10, 5。那么员工1的数据结构是[1, 15,
 * [2]]，员工2的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5,
 * []]。注意虽然员工3也是员工1的一个下属，但是由于并不是直系下属，因此没有体现在员工1的数据结构中。
 * 
 * 现在输入一个公司的所有员工信息，以及单个员工id，返回这个员工和他所有下属的重要度之和。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
 * 输出: 11
 * 解释:
 * 员工1自身的重要度是5，他有两个直系下属2和3，而且2和3的重要度均为3。因此员工1的总重要度是 5 + 3 + 3 = 11。
 * 
 * 
 * 注意:
 * 
 * 
 * 一个员工最多有一个直系领导，但是可以有多个直系下属
 * 员工数量不超过2000。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, target) {
  let temp = 0
  // 深度优先遍历
  const dfs = (index) => {
    // 3.1 解构获取 3 个变量
    const { id, importance, subordinates } = employees[index];
    // 3.2 累加重要值
    temp += importance;
    // 3.3 遍历它的下属，统计下属重要性和下属的下属
    for (let i = 0; i < subordinates.length; i++) {
      for (let j = 0; j < employees.length; j++) {
        if (employees[j].id === subordinates[i]) {
          dfs(j);
        }
      }
    }
  };
  for (let i = 0; i < employees.length; i++) {
    if (target == employees[i].id) {
      dfs(i)
    }
  }
  return temp
};

// @lc code=end

