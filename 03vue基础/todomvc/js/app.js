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

	let local = {
		setval(key, val) {//存
			let str = JSON.stringify(val);
			localStorage.setItem(key, str);
		},
		getval(key) {//取
			let str = localStorage.getItem(key);
			return JSON.parse(str);
		}
	}



	let vm = new Vue({
		el: '#todoapp',
		data: {
			tex: '',
			currentitem: null,
			status: '',
			filterdata: [],
			taskList: []
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
			},
			uncom() {
				return this.taskList.filter(item => !item.completed).length;
			}
		},
		//监听器：普通写法只能监听一层数据
		watch: {
			status(newval) {//获取到status变化的新值
				console.log(newval);
				switch (newval) {
					//过滤留下未完成
					case 'active':
						this.filterdata = this.taskList.filter(item => !item.completed);
						break;
					//过滤留下已完成
					case 'completed':
						this.filterdata = this.taskList.filter(item => item.completed);
						break;
					default:
						this.filterdata = this.taskList;
						break;
				}
				console.log(this.filterdata);
			},
			taskList: {
				deep: true,//深度监听
				handler: function (newval, oldval) {
					console.log(newval);
					//如果数据有更新就把数据存到本地存储里面
					local.setval('todomvc', this.taskList);
				}
			}
		}
	});

	// console.log(vm);
	window.onhashchange = function () {
		//哈希值改变就触发
		// console.log(window.location.hash);//href、search、hash
		// vm.filterStatus = 666;
		let str = window.location.hash.slice(2);
		// console.log(str);
		vm.$data.status = str;//获取或设置属性
	}

	window.onhashchange();//主动先获取哈希值

	//已进入页面就读取local的数据
	vm.$data.taskList = local.getval('todomvc');
})();
