// components/headerNav/headerNav.js

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		searching: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		btnGroup: []
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		// 返回上一页
		navigateBack: function (){
			this.triggerEvent('navigateBack');
		},
		// 清空牌组
		clearDecks: function (){
			this.triggerEvent('clearDecks');
		},
	},

	/**
	 * 
	 */
	attached: function (){
		console.log(getApp().globalData);
		this.setData({
			navigatorBarHeight: getApp().globalData.navigatorBarHeight,
			statusBarHeight: getApp().globalData.statusBarHeight,
			btnGroup: getApp().globalData.headerNavBtnGroup
		});
	},

	/**
	 * 
	 */
	ready: function(){

	},

	/**
	 * 
	 */
	pageLifetimes: {
		
	}



})
