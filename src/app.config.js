module.exports = {
  pages: [
    'pages/index/index',
    'pages/checkin/index',
    'pages/mine/index'
  ],
  window: {
    navigationBarTitleText: 'Remax',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#000000",
    borderStyle: "black",
    list: [{
      pagePath: "pages/index/index",
      text: "-"
    }, {
      pagePath: "pages/checkin/index",
      text: "-"
    }, {
      pagePath: "pages/mine/index",
      text: "-"
    }]
  },
  usingComponents: {}
};