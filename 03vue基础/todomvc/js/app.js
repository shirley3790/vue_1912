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
			* 完成：打钩，控制全选 
			* 点击全选
			* 显示：未完成。已完成、条数
			* 清除所有完成项
			* 数据的持久化存储：刷新数据还在
	*/

	let vm = new Vue({
		el: '#todoapp',
		data: {
			tex: '',
			currentitem: null,
			taskList: [//任务列表
				{
					id: 1, //id
					content: '完成作业', //任务内容
					completed: false //是否完成
				},
				{
					id: 2, //id
					content: '选项卡', //任务内容
					completed: true //是否完成
				},
				{
					id: 3, //id
					content: '购物车', //任务内容
					completed: true //是否完成
				}
			]
		},
		methods: {
			add(ev) {//添加一条任务
				console.log(this.tex);
				//非空判断
				if (this.tex) {
					//准备一条新数据插入到数组里面
					let obj = {
						id: this.taskList.length + 1,
						content: this.tex,
						completed: false
					}
					this.taskList.push(obj);
					//清空并聚焦
					this.tex = '';
					//聚焦
					ev.target.focus();
				}
			},
			remove(index) {//删除一条任务
				if (confirm('您不要我了吗?')) {
					this.taskList.splice(index, 1);
				}
			},
			editing(item) {//编辑任务
				console.log(item);
				this.currentitem = item;
			},
			finish(item, index, ev) {//完成编辑
				console.log(ev.target.value);//获取编辑后的新值
				if (!ev.target.value) {
					//数据为空，就删除该任务
					this.remove(index);
					return;
				}
				//数据不为空。修改item里面的数据
				item.content = ev.target.value;
				this.currentitem = null;//退出编辑
			},
			cancel() {
				this.currentitem = null;//退出编辑
			},
			deleteall() {
				this.taskList = this.taskList.filter(item => !item.completed);
			}
		},
		computed: {
			allcheck: {
				get() {//设置全选 M-V
					return this.taskList.every(item => item.completed);
				},
				set(val) {
					console.log(val);
					this.taskList.forEach(item => item.completed = val);
				}
			}
		}
	});

})();
