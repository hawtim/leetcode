/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
 *
 * algorithms
 * Medium (63.37%)
 * Likes:    287
 * Dislikes: 0
 * Total Accepted:    35.4K
 * Total Submissions: 51.2K
 * Testcase Example:  '[1,3,2,8,4,9]\n2'
 *
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 *
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 *
 * 返回获得利润的最大值。
 *
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 *
 * 示例 1:
 *
 * 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出: 8
 * 解释: 能够达到的最大利润:
 * 在此处买入 prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 *
 * 注意:
 *
 *
 * 0 < prices.length <= 50000.
 * 0 < prices[i] < 50000.
 * 0 <= fee < 50000.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

// 动态规划实现
var maxProfit = function (prices, fee) {
  let dp = new Array(prices.length) //i行，对应i天
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2) //每行有2列，对应2种持股状态
  }
  dp[0][0] = 0
  dp[0][1] = 0 - fee - prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)
  }
  return dp[prices.length - 1][0]
}

var maxProfit = function (prices, fee) {
  var len = prices.length
  if (len < 2) return 0
  var res = 0,
    min = prices[0]
  for (var i = 1; i < len; i++) {
    if (prices[i] < min) {
      //未发生买卖时找到第一个最小数，如果发生过买卖则比较当前价格和上次卖出时的价格减去手续费
      min = prices[i]
    } else {
      if (prices[i] - fee > min) {
        res += prices[i] - min - fee
        //当前的价格已经减过手续费，所以min的值应为当前价格减去手续费。
        min = prices[i] - fee
      }
    }
  }
  return res
}
// @lc code=end
