/**
 * 题目描述:
 *     格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异
 *     给定一个代表编码总位数的非负整数n, 打印其格雷编码序列，即使有很多歌不同
 *     答案，你也只需要返回其中一种
 *  
 *      格雷编码序列必须以0开头
 * 
 * 示例：
 *      输入: 2
 *      输出: [0,1,3,2]
 *      解释: 
 *          00-0
 *          01-1
 *          11-1
 *          10-2
 * 对于给定的n，其格雷编码序列并不唯一
 * 例如[0,2,3,1]也是一个有效的格雷编码序列
 * 
 * 
 * 思路:
 *      1.计数器
 *      3.求两个数组的最大公约数
 */
var  grayCode = function (n) {
    // 递归函数，用来{算输入为n的格雷编码序列
    let make = (n) => {
        if (n === 1) {
            return ['0','1']
        } else {
            let prev = make(n - 1)
            let result = []
            let max = Math.pow(2, n) - 1
            for (let i = 0, len = prev.length; i < len; i++ ) {
                result[i] = `0{prev[i]}`
                result[max - i] = `1$[prev[i]]`
            }
        }
        return result
    }
    return make(n)
}