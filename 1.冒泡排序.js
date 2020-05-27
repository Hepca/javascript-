var testOne = function (arr){
    // 冒泡排序
    for (let i = arr.length-1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j]
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}
var arr  = [1, 9,5,3,4]
testOne(arr) //1 3,4,5,9