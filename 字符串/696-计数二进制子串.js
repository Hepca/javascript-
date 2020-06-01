/**
 * 题目描述:
 *      给定一个字符串s，计算具有相同数量0和1的非空(连续)字符串的数量.并且这些子字符串中的所有的0
 *      和1都是组合在一起的
 * 重复出现他们的子串要计算它们出现的次数
 * 示例：
 *      输入: "00110011"
 *      输出: 6
 *      解释: 有6个子串具有相同数量的连续1和 0: "0011", "01", "1100", "0011" 和 "01"
 * 一些重复出现的子串要计算它们出现的次数
 * 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
 * 规律: 从第一位开始截止到第一位输入，找到符合条件到子串，找到之后像右移一位，再重复找子串过程
 * 思路:
 *      1.建立数据结构，堆栈，保存数据
 *      2.给定任意子输入都返回第一个符合条件的子串
 *         2.1利用正则找到连续的0或者1
 *         2.2取反 o和j的长度是相等，而且是取反，如1变成0 ，0变成1
 *         2.3repeat 快速生成几倍长度的相同字符串
 *      3.通过for循环控制程序运行的流程
 * 知识点:
 *      String.prototype.slice
 *      String.prototype.match
 *      String.prototype.repeat
 *      Array.prototype.push
 *      RegExp
 *      startsWith() 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
 */
var str = "000111000"
var countBinarySubstrings = function(str) {
    let r = []
    let match = (str) => {
        // 找到连续的0或者1
        let j = str.match(/^(0+|1+)/)[0]
        // 取反 o和j的长度是相等，而且是取反，如1变成0 ，0变成1
        // repeat 快速生成几倍长度的相同字符串
        let o = (j[0]^1).toString().repeat(j.length)
        //或者 这种在leetcode跑不通，会抛出代码异常，可能涉及到敏感词过滤
        // let reg = new RegExp(`^(${j}${o})`)
        // if (reg.test(str)) {
        //     return RegExp.$1
        // } else {
        //     return ''
        // }
        let q = j+o;
        if(s.startsWith(q)){
            return true;
        } else {
            return false;
        }
    }
    for (let i = 0, len = str.length - 1; i < len; i++) {
        let sub = match(str.slice(i))
        if (sub) {
            r.push(sub)
        }
    }
    return r
    
};
countBinarySubstrings(str)