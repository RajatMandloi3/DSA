var binarySearch = function (arr, s, e, target) {
    let str = s
    let end = e
    let mid = Math.floor((str + end) / 2)
    while (str <= end) {
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            end = mid - 1
        } else {
            str = mid + 1
        }
        mid = Math.floor((str + end) / 2)
    }
    return -1
}

var search = function (nums, target) {
    let s = 0, e = nums.length - 1, mid = Math.floor((s + e) / 2)
    let pivot = -1
    while (s < e) {
        if (s === e) {
            pivot = s
            break
        }
        if (nums[mid] > nums[mid + 1]) {
            pivot = mid
            break
        } else if (nums[mid] < nums[mid - 1]) {
            pivot = mid - 1
            break
        } else if (nums[0] > nums[mid]) {
            e = mid - 1
        } else {
            s = mid + 1
        }
        mid = Math.floor((s + e) / 2)
    }
    const search1 = binarySearch(nums, 0, pivot, target)
    const search2 = binarySearch(nums, pivot + 1, nums.length - 1, target)
    if (search1 === -1 && search2 === -1) {
        return -1
    } else {
        return search1 => 0 ? search1 : search2
    }
};

console.log(search([3,1],3))