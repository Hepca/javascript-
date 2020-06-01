/**
 * 题目描述:
 *     假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有
 *     可是，花卉不能种植在相邻地地块上，它们会争夺水源，两者都会死去
 * 
 *     给定一个花坛(表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花)
 *     和一个数n。能否在不打破种植规则的情况下种入n朵花？能则返回true，不能则返回false
 * 
 * 示例：
 *      输入: flowerbed = [1,0,0,0,1], n = 1
 *      输出: true
 * 
 * 示例2:
 *      输入: flowerbed = [1,0,0,0,1], n = 2
 *      输出: false
 * 
 * 思路:
 *      1.计数器
 *      3.求两个数组的最大公约数
 */
var canPlaceFlowers = function(arr, n) {
    let max = 0
    for (let i = 0, len = arr.length - 1; i < len; i++) {
      if (arr[i] === 0) {
        if (i === 0 && arr[1] === 0) {
          max++
          i++
        } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
          max++
          i++
        }
      }
    }
    return max >= n
}
