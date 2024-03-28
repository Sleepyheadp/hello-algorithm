/*
 * @Author: Sleepyheadp sleepyheadp322@gmail.com
 * @Date: 2024-03-28 10:40:30
 * @LastEditors: Sleepyheadp sleepyheadp322@gmail.com
 * @LastEditTime: 2024-03-28 14:33:12
 * @FilePath: /hello-algorithm/chapter_sorting/quick_sort.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* 快速排序 */
// 处理: 将所以小于基准数(数组最左端元素)的元素移到其左侧,将所有大于基准数的元素移到其右侧.
function quick_sort(nums, left, right) {
	if (left < right) {
		let pivotIndex = partition(nums, left, right);
		// 对左右数组进行分别递归执行哨兵划分
		quick_sort(nums, left, pivotIndex - 1);
		quick_sort(nums, pivotIndex + 1, right);
	}
}
// 交换位置
function swap(nums, i, j) {
	let temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

// 分区(左右区) => 哨兵划分
function partition(nums, left, right) {
	let i = left,
		j = right;
	while (i < j) {
		while (i < j && nums[j] >= nums[left]) {
			j--; // 从右向左找首个小于基准数的元素
		}
		while (i < j && nums[i] <= nums[left]) {
			i++; // 从左向右找首个大于基准数的元素
		}
		swap(nums, i, j);
	}
	swap(nums, i, left);
	console.log("i:", i);
	return i; // 基准数(哨兵划分数)
}
const nums = [4, 1, 3, 1, 5, 2];
partition(nums, 0, nums.length - 1);
console.log(nums);
