/**
 * 题目描述:
 *     请实现一个函数用来匹配包含'. '和'*'的正则表达式。
 *      模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（含0次）。
 *      在本题中，匹配是指字符串的所有字符匹配整个模式。
 *      例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。
 * 
 * 示例：
 *      输入: s = "aa" p = "a"
 *      输出: false
 *      解释: "a" 无法匹配 "aa"整个字符串
 */
var isMatch = function (s, p) {
    // 每次处理新的模式s 跟新的模式p
    let isMatch = (s, p) => {
        // 边界情况，如果s和p都为空，说明处理结束了， 返回true，否则false
        if (p.length <= 0) {
            return s.length ? false: true
        }
        // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
        let match = false
        if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
            // 当前模式的第一个字符跟字符串中的第一个字符匹配
            match = true
        } 
        // 有模式的
        if (p.length > 1 && p[1] === '*') {
            // 第一种情况: s*匹配0个字符
            // 第二种情况: s*匹配1个字符，递归下去，用来表示s*匹配多个s
           return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
        }  else {
            return match && isMatch(s.slice(1), p.slice(1))
        }
    }
    return isMatch(s, p)
 }