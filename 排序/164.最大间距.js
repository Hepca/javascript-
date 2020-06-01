/**
 * 题目描述:
 *      给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值
 *      如果数组元素个数小于2， 则返回0
 *    
 * 示例：
 *      输入: [3,6,9,1]
 *      输出: 3
 *      解释: 排序后的数组是[1,3,6,9],其中相邻元素(3,6)和（6，9)
 *           之间都存在最大差值3
 * 
 * 说明:
 *     1.你可以假设数组中所有元素都是非负整数，且数值在32位有符号整数范围内
 *     2. 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题
 */
var maximumGap = function(arr) {
    // 第一种
    // 数组长度小于2返回0
    // if (arr.length < 2) {
    //     return 0
    // } 
    // 排序
    // arr.sort()
    // 用来保存相邻元素的最大差值
    // let max = 0
    // for (let i = 0, len = arr.length -1, tmp; i < len; i++) {
    //     tmp = arr[i +1] - arr[i]
    //     if (tmp > max) {
    //         max = tmp
    //     }
    // }
    // return max

    // 第二种
    if (arr.length < 2) {
        return 0 
    }
    let max = 0
    let len = arr.length - 1
    let space 
    for (let i = len, tmp; i > 0; i--) {
        for (let j =0; j < i ; j++) {
            tmp = arr[j]
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j +1] = tmp
            }
        }
        if (i < len) {
            space = arr[i + 1] -arr[i]
            if (space > max) {
                max = space
            }
        }
    }
    return Math.max(max, arr[1] - arr[0])
}