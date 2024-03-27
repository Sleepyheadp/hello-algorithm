/*
 * @Author: Sleepyheadp sleepyheadp322@gmail.com
 * @Date: 2024-03-27 22:31:54
 * @LastEditors: Sleepyheadp sleepyheadp322@gmail.com
 * @LastEditTime: 2024-03-28 00:20:38
 * @FilePath: /hello-algorithm/chapter_sorting/selection_sort.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function selection_sort(nums) {
	/* 疑问:这里为什么最后一个数不遍历?
	 *  我们是从0开始比较,nums[0]与nums[1],nums[1]与nums[2],nums[2]与nums[3],nums[3]与nums[4],nums[4与nums[5]
	 *  所以其实最后一个数已经在遍历到nums.length - 1 的时候已经对比了,最后一个数后面没有数了,不需要遍历进行对比.
	 */
	for (let i = 0; i < nums.length - 1; i++) {
		// 记录最小索引下标.初始值肯定是0;(因为是从下标0开始比较的)
		let minNumIndex = i; //例如先从0开始 1
		// 前后相邻的下标进行比较
		for (let j = i + 1; j < nums.length; j++) {
			console.log(`内循环执行了...`);
			// 如果nums[1] < nums[0] 则交换两个数的位置(下标)
			if (nums[j] < nums[minNumIndex]) {
				minNumIndex = j;
			}
		}
		// [tips]并不是外循环执行一次,内循环就会执行一次,而是外循环执行一次,内循环会执行nums.length - i次
		// [注意]只有当循环结束且找到了最小值的时候才会进行位置替换.
		// 对比一个改变一次位置
		[nums[i], nums[minNumIndex]] = [nums[minNumIndex], nums[i]];
		console.log(`循环${i + 1}次后的数组:${nums}`);
	}
}
const nums = [4, 1, 3, 1, 5, 2];
selection_sort(nums);

// [疑问🤔]每次双循环不是对比的前后两个数的大小吗?
// 那应该怎么选择未循环数组里的最小值,然后放到已循环的末尾呢?
