/**
 * 快速排序: 数组中指定一个元素作为标尺，比它大的放到该元素后面
 *          比它小的放到该元素前面，如此重复直至全部正序排序
 * 比如说我有10个元素，在这10个元素中，我可以随便选任何一个元素为参考
 * 然后在其他的9个元素中依次遍历,比这个标尺小的放到元素左边，比它大的放到元素右边
 */
var fastSort = function (arr) {
    let quickSort = (arr) => {
        let len = arr.length
        if (len < 2) {
            return arr
        } else {
            //  选标识元素
            let flag = arr[0]
            let left = []
            let right = []
            // 把剩余的元素遍历下，比标尺元素的小的放左边。大的放右边
            for (let i = 1, tmp; i < len ; i++) {
                tmp = arr[i]
                if (tmp < flag) {
                    left.push(tmp)
                } else {
                   right.push(tmp) 
                }
            }
            // 进行递归操作
            return quickSort(left).concat(flag, quickSort(right))
        }
    }
    return quickSort(arr)
}

// var arr = [1,2,0]
var arr = [5,2,6,7,9,3,2]
fastSort(arr)
console.log(fastSort(arr), 'lalalal')

// 快速排序(划分交换排序)
var fastSortTwo = function (arr) {
    // 数组指定两个位置进行交换
    let swap = (arr, i , j) => {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    // 完成第一次划分交换
    let findCenter = (arr, left, right) => {
        let flag = arr[left]
        let idx = left + 1
        for (let i = idx; i <=right ; i++) {
            if (arr[i] < flag) {
                swap(arr, idx, i)
                idx++
            }
        }
        swap(arr, left, idx - 1)
        return idx
    }
    // 递归排序
    let sort = (arr, left, right) => {
        if (left < right) {
            // 找到中间元素
            let center = findCenter(arr, left, right)
            sort(arr,left,center - 1)
            sort(arr,center, right)
        }
    }
    sort(arr, 0 , arr.length - 1)
    return arr
}