(function () {
	'use strict';

	/*
		需求：
			* 列表数据渲染 ok
			* 没有数据隐藏列表 ok
			* 添加任务 ok
			* 删除任务 ok
			* 编辑任务 ok
				* 双击label就进入编辑状态:li插入一个input text
				* 修改任务，按下回车或失去焦点就保存任务:保存的时候如果数据为空就删除该任务
				* 修改任务的时候，按下取消esc键，退出编辑状态不保存
			* 完成：打钩，控制全选 ok
			* 点击全选 ok
			* 显示：未完成。已完成、条数 ok
			* 清除所有完成项 ok
			* 数据的持久化存储：刷新数据还在 ok
	*/

	/*
		封装一个方法能读取和设置localstorage 
			* setItem(key,value) 只能存字符串
			* getItem(key)
	*/

	



	let vm = new Vue({
		el: '#todoapp',
		
	});

	// console.log(vm);
	
})();
