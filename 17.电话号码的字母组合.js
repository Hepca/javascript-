/**
 * 题目描述:
 *      给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合
 *      给出数字到字母的映射如下(与电话按键相同)。注意1不对应任何字母
 *    
 * 示例：
 *      输入: "23"
 *      输出: ["ad", "ae", "af", "bd", "be", "bf","cd", "ce", "cf"]
 *      说明: 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序
 * 
 * 思路:
 *      1.建立电话号码键盘映射
 *      2.把输入字符串按单字符分割变成数组 234=>[2,3,4]
 *      3.声明空数组保存键盘映射后的字母内容 如 23=>['abc', 'def']
 * 知识点:
 *      String.prototype.splice
 */
let str = '23'
var letterCombinations = function (str) {
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let num = str.split('')
    let code = []
    num.forEach(item => {
        // 如果输入的是0，则没有该对应的键盘映射值，电话键盘上1对应的字母内容是空丢掉这个code值
        if (map[item]) {
            code.push(map[item])
        }
    })
    let comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        let tmp = []
        // 最外层的循环遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0, il = arr[0].length; i < il; i++) {
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                // 保存第一个元素的第i个元素及保存第一个元素第第j个字符
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        // 把当前组合的前两个替换
        arr.splice(0 ,2, tmp)
        if (arr.length > 1) {
            // 递归
            comb(arr)
        } else {
            return tmp
        }
        // 最后返回数组的第一个元素，如果最后是两个元素就会进递归里去
        return arr[0]
    }
    // 这个code就是第一步算出来的结果
    return comb(code)
}
letterCombinations(str)
console.log(letterCombinations(str))  // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].