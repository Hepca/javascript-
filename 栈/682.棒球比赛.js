/**
 * 题目描述:
 *      给定一个只包含数字定字符串，复原它并返回所有可能的IP地址格式
 *    
 * 示例：
 *      输入: ["5", "2", "c", "d", "+"]
 *      输出: 30
 *      解释:
 *      第一轮: 你可以得到5分，总和是：5
 *      第二轮: 你可以得到2分，总和是7
 *      操作1: 第2轮的数据无效，总和是5
 *      第3轮: 你可以得到10分(第2轮第数据已被删除)总数是15
 *      第4轮: 你可以得到5+10 = 15分，总数是30
 * 
 */
var calPoints = function (arr) {
    // 用数组来实现堆栈结构 pop push
    let result = []
    // 上一轮的数据
    let pre1
    let pre2
    // 对数组进行遍历，遍历目对处理得分
    arr.forEach(item => {
        switch(item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break
            case "D":
                pre1 = result.pop()
                result.push(pre1, pre1*2)
                break
            case '+':
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2, pre1, pre2 + pre1)
                break
            default:
                result.push(item * 1)
        }
    })
    return result.reduce((total, num) => {
        return total + num
    })
}