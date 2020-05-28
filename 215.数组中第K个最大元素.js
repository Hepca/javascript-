/**
 * 题目描述:
 *      在末排序的数组中找到第k个最大的元素。请注意，你需要找的是数组排序后
 *      第k个最大的元素，而不是第k个不同的元素
 *    
 * 示例：
 *      输入: [3,2,1,5,6,4]和 k = 2
 *      输出: 5
 * 
 * 思路:
 *      1.冒泡排序：
 *       ft
 */
var findKthLargest = function(arr, k) {
    // return arr.sort((a, b) => b - a)[k-1]
    let len = arr.length - 1
    for (let i = len, tmp; i > len -k ; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                tmp = arr[j]
                arr[j] = arr[j+l1]
                arr[j+1] = tmp
            }
        }
    }
    // arr[len+1-k]
    return arr[len -(k-1)]
}