/**
 * 题目描述:
 *      给定一个非负整数数组A,A中一半整数是奇数，一半整数是偶数
 *      对数组进行排序，以便当A[i] 为奇数时, i也是奇数
 *      当A[i]为偶数时，i也是偶数
 *      你可以返回任何满足上述条件对数组作为答案
 * 
 * 示例：
 *      输入: [4,2,5,7]
 *      输出: [4,5,2,7]
 *      解释: [4,7,2,5], [2,5,4,7] 也会被接受
 */
var arr = [4,2,5,7,1]
var sortArrayByParityII = function (arr) {
    // 进行将叙排序
    arr.sort((a, b) => a - b)
    // 声明一个空数组用来存储奇偶排序后的数组
    let r = []
    // 记录奇数，偶数位下标
    let odd = 1
    let even = 0
    // 对数组进行遍历
    arr.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item
            odd +=2
        } else {
            r[even] = item
            event += 2
        }
    })
    return r
}