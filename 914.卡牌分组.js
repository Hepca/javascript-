/**
 * 题目描述:
 *      给定一副牌，每张牌上都写着一个整数
 *      此时，你需要选定一个数字X，使我们可以将整副牌按下述规则分成组1或更多组
 *  1.每组都有X张牌
 *  2.组内所有都牌上都写着相同都整数
 *  仅当你可选当x>=2 时返回true
 *    
 * 示例：
 *      输入: [1,2,3,4,4,3,2,1]
 *      输出: true
 *      说明: 可行当分组是[1,1],[2,2],[3,3],[4,4]
 * 
 * 思路:
 *      1.卡牌排序，排序的目的就是为了让相同的牌排在一起
 *      2.分组(单张或者多张分组)
 *      3.求两个数组的最大公约数
 */
var hasGroupsSizeX = function(arr) {
    let str = arr.sort().join('')
    let group = str.match(/(\d)\1+|\d/g)
    let gcd = (a, b) => {
        if (b === 0) {
            return a 
        } else {
            return gcd(b, a % b)
        }
    }
    while(group.length > 1) {
        let a = group.shift().length
        let b = group.shift().length
        let v = gcd(a, b)
        if (v === 1) {
            return false
        } else {
            group.unshift('0', repeat(v))
        }
    }
    return group.length ?group[0].length > 1: false
}
