/*
 * @Author: Sleepyheadp sleepyheadp322@gmail.com
 * @Date: 2024-03-28 01:08:53
 * @LastEditors: Sleepyheadp sleepyheadp322@gmail.com
 * @LastEditTime: 2024-03-28 10:37:46
 * @FilePath: /hello-algorithm/chapter_sorting/insertion_sort.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 插入排序: 将一个数插入到数组中已经排序好的且按顺序排列的位置.
/* 已要插入的数为基准,左侧为已排序数组,右侧为未排序数组 */
// 1.首先默认第一个是已经排序好的,即已排序区间为[0,0],未排序区间为[1,n-1].这样才能从第二个数开始与已排序区间中的数进行比对,插入到合适的位置.
// 2.默认要插入的数为'base',将base与已排序区间中的数进行比对,如果base小于已排序区间中的数,则将已排序区间中的数后移一位,直到找到base的合适位置.
function insertion_sort(nums) {
	for (let i = 1; i < nums.length; i++) {
		// nums[0]不需要对比(首位,前面没数),从nums[1]开始为基准进行比较并插入
		let base = nums[i],
			j = i - 1;
		// j>=0:因为下标最小为0,不能取负数.
		// nums[j] > base:首先nums[j]是已排序区间的数,依次与base进行比对
		while (j >= 0 && nums[j] > base) {
			nums[j + 1] = nums[j]; // 如果前后两个数中,nums[j] > base,则将nums[j]后移一位
			j--; // 要让当前的base一直与前面已排序数组中的数进行比较,直到找到合适的位置.
		}
		// 为什么是j+1呢?因为我们在找到了合适的位置后又执行了j--
		nums[j + 1] = base;
	}
}
const nums = [4, 1, 3, 1, 5, 2];
insertion_sort(nums);
console.log("插入排序后的数组:", nums);
