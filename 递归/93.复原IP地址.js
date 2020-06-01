/**
 * 题目描述:
 *      给定一个只包含数字定字符串，复原它并返回所有可能的IP地址格式
 *    
 * 示例：
 *      输入: "25525511135"
 *      输出: ["255.255.11.135", "255.255.111.35"]
 * 
 * 递归本质:
 *     1.每一个处理过程是相同的
 *     2.输入和输出是相同的
 *     3.处理次数未知
 */
var restoreIpAddresses = function(str) {
    // 判断最大边界
    if(str.length > 12) return []
    // 保存所有符合条件的ip
    let r = []
    // 递归函数
    let search = (cur, sub) => {
        //数组长度等于 4 且组合起来与之前的字符串相等
        if (cur.length === 4 && cur.join('') === str) {
            //  过滤 001 010等情况
            if (cur[3].length > 1 && cur[3][0] == 0) {
                return false
            }
            r.push(cur.join('.'))
        } else{
            // 处理正常过程
            // 每次最多循环三次
            for (let i = 0, len= Math.min(3, sub.length); i <len; i++) {
                tmp = sub.substr(0, i+ 1)
                //  过滤 001 010等情况    
                if (tmp.length > 1 && tmp[0] === 0) return
                // 如果当前的数小于 256 说明在 255 范围内，接着递归调用(把不是范围内的排出掉)
                // 例如 255255255， 截取第一次 2，第二次递归截取时 for循环第三次是 522 不在范围内
                if (tmp < 256) {
                    search(cur.concat([tmp]), sub.substr(i + 1))
               }
            }
        }
    }
    search([],str)
    return r
} 