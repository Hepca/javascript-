/**
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc" 
 * 反转字符串知识点:
 *      String.prototype.split
 *      String.prototype.match
 *      Array.prototype.map
 *      Array.prototype.reverse
 *      Array.prototype.join
 * 思路：
 *     1.字符串按空格进行分割，保存数组，数组的元素的先后顺序就是单词的先后顺序
 *     2.对数组进行遍历。然后每个元素进行反转
 */
var str = "Let's take LeetCode contest"
// 第一种解法
export default (str) => {
    let arr = str.split(' ')
    let result = arr.map(item => {
        return item.split('').reverse().join('')
    })
    return result.join(' ')
}
// 第一种解法代码过于冗余代码优化
export default (str) => {
    return str.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}
// 第二种用正则替代空格
export default (str) => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}

// 第三种match, split是分割，match是去识别从左到右一个个去识别
//[\w'] 中括号表示可选项
export default (str) => {
    return str.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}