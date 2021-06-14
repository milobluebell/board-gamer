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
		btnGroup: [{
			iconName: 'info',
			status: 0
		},
		{
			iconName: 'waiting',
			status: 1
		}
		],
		top: getApp().globalData.menuButtonBoundingClientRect.top,
		height: getApp().globalData.menuButtonBoundingClientRect.height,
		left: getApp().globalData.windowWidth - getApp().globalData.menuButtonBoundingClientRect.right,
		widthPerBtn: getApp().globalData.menuButtonBoundingClientRect.width / 2,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		// 返回上一页
		navigateBack: function () {
			this.triggerEvent('navigateBack');
		},
		// 清空牌组
		clearDecks: function () {
			this.triggerEvent('clearDecks');
		},
	},

	attached: function () {
	},

})
