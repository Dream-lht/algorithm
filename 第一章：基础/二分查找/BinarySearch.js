function BinarySearch(arr, searchVal) {
    var l, h, mid;
    l = 0;
    h = arr.length - 1;
    while (l <= h) {
        mid = Math.floor((l + h) / 2);
        if (arr[mid] > searchVal) {
            h = mid - 1;
        }
        else if (arr[mid] < searchVal) {
            l = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
console.log(BinarySearch([2, 5, 9, 10, 15, 23, 45, 86], 15));
