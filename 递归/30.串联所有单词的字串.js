/**
 * 题目描述:
 *     给定一个字符串s和一些长度相同的单词words，找出s中恰好可以由
 *     words中所有单词串联形成的子串的起始位置
 *  注意子串要与words中单词完全匹配，中间不能有其他字符，
 *  但不需要考虑words中单词串联的顺序
 *    
 * 示例：
 *      输入: s = 'barfoothefoobarman'
 *           words = ['foo', 'bar']
 *      输出: [0,9]
 *      解释:从索引0和9开始的子串分别是"barfoor" 和 "foobar"
 * 
 * 递归本质:
 *     1.每一个处理过程是相同的
 *     2.输入和输出是相同的
 *     3.处理次数未知
 */
var findSubstring = function (str, words) {
    // 保存结果
    let result = []
    // 记录数组长度, 做边界条件计算
    let num = words.length
    // 递归函数体
    let range = (r, _arr ) => {
        if (r.length === num) {
            result.push(r)
        } else {
            _arr.forEach((item, idx) => {
                let tmp = [].concat(_arr)
                tmp.splice(idx, 1)
                range(r.concat(item), tmp)
            })
        }
    }
    range([], words)
    return result.map(item => {
        return str.indexOf(item.join(''))
    }).filter(item => item !== -1).sort()
}