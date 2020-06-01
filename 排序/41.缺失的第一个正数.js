/**
 * 题目描述:
 *      给定一个末排序的整数数组，找出其中没有出现的最小的正整数
 *    
 * 示例：
 *      输入: [1,2,0]
 *      输出: 3
 * 
 * 示例：
 *      输入: [3，4，-1，1]
 *      输出: 2
 * 
 * 思路:
 *      1.选择排序：
 */
var firstMissingPosit = function(arr) {
    // 过滤负数, 保留正整数
    arr = arr.filter(item => item > 0)
    // 剩余正整数数组是不是为空
    if (arr.length) {
        // 升序 目的：方便从左到右最小值arr[0]
        arr.sort((a,b) => a - b)
        // 如果第一个元素不是1，返回1
        if (arr[0] !== 1) {
            return 1
        } else {
            // 从左边开始遍历，只要下一个元素和当前元素差值> 1
            for (let i = 0, len = arr.length -1; i < len; i++) {
                if (arr[i+1] - arr[i] > 1) {
                    return arr[i] + 1
                }
            }
            // 如果数组是连续当正整数[1,2,3,4,5,6]
            return arr.pop() + 1
        }
    } else {
        return 1
    }
}

var firstMissingPosit = function (arr) {
    arr = arr.filter(item => item > 0)
    // 实现选择排序，先拿到最小值，如果第一个元素不是1直接返回最小值，如果是1 就要比相邻元素差值
    for (let i = 0, len = arr.length,min; i< len ; i++) {
        min = arr[i]
        // 选择排序
        for (let j = i +1; j < len; j++) {
            if (arr[j] < min) {
                let c = min
                min = arr[j]
                arr[j] = c
            }
        }
        //记录当前最小值
        arr[i] = min
        if (i> 0) {
            if (arr[i] -arr[i -1] > 1) {
                return arr[i -1] + 1
            }
        } else {
            if (min !== 1) {
                return 1
            }
        }
    }
    return arr.length ? arr.pop() + 1: 1
}