function insertion_sort(nums) {
	for (let i = 1; i < nums.length; i++) {
		// nums[0]不能动,从nums[1]开始为基准进行比较并插入
		let base = nums[i],
			j = i - 1;
		while (j >= 0 && nums[j] > base) {
			nums[j + 1] = nums[j];
			j--;
		}
		nums[j + 1] = base;
	}
}
const nums = [4, 1, 3, 1, 5, 2];
insertion_sort(nums);
console.log("插入排序后的数组:", nums);
