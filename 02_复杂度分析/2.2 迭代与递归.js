/*
 * @Author: Sleepyheadp sleepyheadp322@gmail.com
 * @Date: 2024-06-09 18:06:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-09 21:42:50
 * @FilePath: /hello-algorithm/02_复杂度分析/2.2 迭代与递归.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*  2.2.1 迭代:重复执行某个任务的控制结构 */

/* 1.for循环 */
function forLoop(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
			arr.push(i);
		}
	}
	console.log("forLoop:", arr); // [0, 2, 4]
	return arr;
}
forLoop(5);

/* 2.while循环 */
// demo: while实现循环
function whileLoopII(n) {
	let res = 0;
	let i = 1; // 初始化条件变量
	// 循环求和 1, 4, 10, ...
	while (i <= n) {
		res += i;
		// 更新条件变量
		i++;
		i *= 2;
	}
	console.log("whileLoopII:", res); // 5
	return res;
}
whileLoopII(5);

// demo:for实现累加(每次循环对i进行两次值变更)
function forLoopII(n) {
	let res = 0;
	for (let i = 1; i <= n; ) {
		res += i;
		i++;
		i *= 2;
	}
	console.log("forLoopII:", res); // 5
	return res;
}
forLoopII(5);

/* 3. 嵌套循环 */
function nestLoop(n) {
	let arr = [];
	// 外循环没执行一次, 内循环执行3次 (0,0) (0,1) (0,2)
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			arr.push([i, j]);
		}
	}
	console.log("嵌套循环:", arr);
	return arr;
}
nestLoop(3);

/* 2.2.2 递归:函数调用自身 */
// 中止条件 递归调用 返回结果
/* 
  在递归函数中，每次函数调用都会被压入调用栈中。
  当一个函数调用另一个函数时，当前的函数调用被暂停，并等待被调用的函数执行完毕后再继续执行。
*/
function recursion(n) {
	// 中止条件
	if (n === 1) {
		return 1;
	} // return语句后续的代码不会执行
	// 递归调用
	const res = recursion(n - 1);
	// 返回结果
	return n + res;
}
console.log("recursion:", recursion(5));
/* 
  执行过程:
  1. 首先n=5进来,未满足中止条件,调用recursion(4).此时recursion(4)被压入调用栈中,暂停执行
  2. 然后n=4进来,未满足中止条件,调用recursion(3).此时recursion(3)被压入调用栈中,暂停执行
  3. ...
  4. ...
  5. 直到n=1,满足中止条件,返回并打印1,后续代码不再执行,开始逐层返回结果
  4. 继续回溯执行recursion(2),这个时候n=2,res=1,打印3
  3. 继续回溯执行recursion(3),这个时候n=3,res=3,打印6
  2. 继续回溯执行recursion(4),这个时候n=4,res=6,打印10
  1. 继续回溯执行recursion(5),这个时候n=5,res=10,打印15
  所以最终打印 1 3 6 10 15
  调用栈的作用是确保每个函数调用在完成其子调用后能够继续执行.
  因此，当 recursion(1) 返回 1 后，程序会回到 recursion(2) 的调用点，并继续执行之后的代码。
  这个过程持续到所有的递归调用都完成并返回最终的结果。
*/
// n=1时,res=1,打印1
// n=2时,调用recursion(1) res=1 n=2 打印3
// n=3时,调用recursion(2) res=3 n=3 打印6
// n=4时,调用recursion(3) res=6 n=4 打印10
// n=5时,调用recursion(4) res=10 n=5 打印15

/* 1.调用栈 */
/* 2.尾递归:函数在返回前的最后一步才进行递归调用 */
// demo: 用迭代 递归 尾递归分别实现求和 1+2+3+...+n
// 2.1 迭代
function iterationSum(n) {
	let res = 0;
	for (let i = 1; i <= n; i++) {
		res += i;
	}
	return res;
}
console.log("iterationSum:", iterationSum(5));
// 2.2 递归
function recursionSum(n) {
	if (n == 1) {
		return 1;
	}
	return n + recursionSum(n - 1);
}
console.log("recursionSum:", recursionSum(5));
/* 
递归n=5,调用recursionSum(4)
递归n=4,调用recursionSum(3)
递归n=3,调用recursionSum(2)
递归n=2,调用recursionSum(1)
n=1,返回1,res=1;
n=2,回溯调用recursionSum(1),res = 2 + 1;
n=3,回溯调用recursionSum(3),res = 3 + 3;
n=4,回溯调用recursionSum(4),res = 4 + 6;
n=5,回溯调用recursionSum(5),res = 5 + 10;
所以最终结果是15
*/

/* 2.3 尾递归[没理解暂时先放一放] */
// 递归调用是函数的最后一个操作
function tailRecursionSum(n, res = 0) {
	if (n == 0) {
		return res;
	}
	// 这里的第二个参数就是res,也就是我们的想要的结果:累加和
	// 但是我们的结果为什么是res+n呢?因为我们的递归调用是在函数的最后一步
	return tailRecursionSum(n - 1, res + n);
}
console.log("tailRecursionSum:", tailRecursionSum(5, 0));
// 怎么运行的?
// tailRecursionSum(5, 0) 调用 tailRecursionSum(4, 5),这时n=4,res=0+5=5
// tailRecursionSum(4, 5) 调用 tailRecursionSum(3, 9),这时n=3,res=5+4=9
// tailRecursionSum(3, 9) 调用 tailRecursionSum(2, 12),这时n=2,res=9+3=12
// tailRecursionSum(2, 12) 调用 tailRecursionSum(1, 14),这时n=1,res=12+2=14
// tailRecursionSum(1, 14) 调用 tailRecursionSum(0, 15),这时n=0,res=14+1=15
// 这个时候n=0,满足条件,返回res=15

/* 3.递归树 */
// task 给定一个斐波那契数列0,1,1,2,3,5...,求第n个数
// 递归实现
// demo1(注意这里的n表示的是下标为n的数)
function fibonacci(n) {
	// 斐波那契数列的数是前两个数的和,所以我们单独处理n=0和n=1的情况
	// 因为f(0)和f(1)就是最初的两个数
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	const res = fibonacci(n - 1) + fibonacci(n - 2);
	// 返回结果
	return res;
}
// 注意这里的5表示的是下标为5的数
console.log("fibonacci:", fibonacci(5));

//demo2(注意这里的n表示的是第n个数,而不是下标)
function fib(n) {
	// 终止条件 f(1) = 0, f(2) = 1
	if (n === 1 || n === 2) return n - 1;
	// 递归调用 f(n) = f(n-1) + f(n-2)
	const res = fib(n - 1) + fib(n - 2);
	// 返回结果 f(n)
	return res;
}
console.log("fib:", fib(5));
