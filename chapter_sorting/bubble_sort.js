/*
 * @Author: Sleepyheadp sleepyheadp322@gmail.com
 * @Date: 2024-03-28 00:40:50
 * @LastEditors: Sleepyheadp sleepyheadp322@gmail.com
 * @LastEditTime: 2024-03-28 01:07:41
 * @FilePath: /hello-algorithm/chapter_sorting/bubble_sort.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function bubble_sort(nums) {
	for (let i = nums.length - 1; i > 0; i--) {
		// 冒泡:将最大值移动到最后(i的最大值是数组的长度-1)
		// 第一次循环:对比nums[0]和nums[1],如果大于,则交换位置.
		// 第二次循环:对比nums[1]和nums[2],如果大于,则交换位置.
		// 依次类推,直到对比到nums[i-1]和nums[i]
		for (let j = 0; j < i; j++) {
			if (nums[j] > nums[j + 1]) {
				// 比如 4 > 2,那就要交换这两个数的位置
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
}
const nums = [4, 1, 3, 1, 5, 2];
bubble_sort(nums);
console.log("冒泡后的数组:", nums);
